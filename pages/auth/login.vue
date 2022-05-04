<template lang="">
  <div class="login">
    <section class="">
      <div class="form">
        <div class="title">
          <font-awesome-icon icon="x" />
          <h1>Sign Up to Ajo</h1>
        </div>
        <form @submit="login()" enctype="multipart/form-data" method="post">
          <div class="fields">
            <label for="email"><strong>Email Address</strong></label>
            <input type="email" name="email" v-model="email" />

            <label for="email"><strong>Password</strong></label>
            <input type="password" name="email" v-model="password" />
            <span class="forgot">
              Use Uppercase, Lowercase and Numeric characters*
            </span>
          </div>
          <div>
            <div class="btn">
              <button type="button" @click="login()">
                <TheButton title="Sign In" value="yellowBgLg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="reg">
      <div class="back">
        <p>Don't have an account?</p>
        <nuxt-link to="/auth/register"><span>Register</span></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      userInfo: this.$store.state.userDetails,
    }
  },
  methods: {
    async login() {
      const data = {
        email: this.email,
        password: this.password,
      }
      axios
        .post('https://ajo-app.herokuapp.com/api/auth/signin', data)
        .then((res) => {
          const userData = res.data
          userData.user.token = userData.token
          this.$store.commit('setUserDetails', userData.user)
          this.$toasted.show('You have logged in successfully', {
            theme: 'primary',
            position: 'top-center',
            duration: 5000,
            type: 'success',
          })
          this.$router.push('/home')
        })
    },
  },
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 428px) {
  .login {
    padding: 43px 32px;
    .form {
      .title {
        svg {
          color: #041a7a;
          font-size: 32px;
        }
        h1 {
          font-family: 'Brown';
          color: #041a7a;
          margin-top: 32px;
        }
      }
      form {
        .fields {
          display: flex;
          flex-direction: column;
          label {
            font-family: 'Brown';
            font-weight: normal;
            font-size: 12px;
            margin: 16px 0px;
            color: #686868;
            line-height: 16px;
          }
          input {
            height: 50px;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 0.1rem 0.5rem;
          }
          span {
            font-family: 'Brown';
            font-weight: normal;
            font-size: 12px;
            margin-bottom: 10px;
            color: #686868;
            line-height: 16px;
          }
        }
        .methods {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 56px;
          p {
            margin-bottom: 0px;
            padding: 0px 5px;
            font-family: 'Brown';
            font-size: 16px;
          }
        }
        .socials {
          .acc {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-top: 24px;
            svg {
              font-size: 25px;
              background-color: #072ac8;
              color: #fff;
              border-radius: 16px;
              padding: 17px 29px;
            }
          }
        }
      }
    }

    .reg {
      margin-top: 221px;
      bottom: 23px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Brown';
      .btn {
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        a {
          color: #041a7a;
          text-decoration: none;
          font-weight: 200;
        }
      }
    }
    button {
      background: transparent;
      border: 0px;
    }
  }
}
</style>
