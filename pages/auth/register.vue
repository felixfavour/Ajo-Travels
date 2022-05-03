<template lang="">
  <div class="login">
    <section class="">
      <div class="form">
        <div class="title">
          <font-awesome-icon icon="x" />
          <h1>Sign Up to Ajo</h1>
        </div>
        <form @submit="register()" enctype="multipart/form-data" method="post">
          <div class="names">
            <div class="name">
              <label for="firstname"><strong>First Name</strong></label>
              <input type="text" name="firstname" v-model="firstname" />
            </div>
            <div class="name">
              <label for="lastname"><strong>Last Name</strong></label>
              <input type="text" name="lastname" v-model="lastname" />
            </div>
          </div>
          <div class="fields">
            <label for="email"><strong>Email Address</strong></label>
            <input type="email" name="email" v-model="email" />

            <label for="password"><strong>Password</strong></label>
            <input type="password" name="password" v-model="password" />
            <span class="forgot">
              Use Uppercase, Lowercase and Numeric characters*
            </span>
          </div>

          <div class="btn">
            <button type="button" @click="register()">
              <TheButton title="Register" value="yellowBgLg" />
            </button>
          </div>
          <div class="methods">
            <span>____________ </span>
            <p>Or Sign Up with</p>
            <span>____________ </span>
          </div>
          <div class="socials">
            <div class="acc">
              <img src="../../assets/img/apple.png" alt="" />
              <img src="../../assets/img/google.png" alt="" />
              <img src="../../assets/img/facebook.png" alt="" />
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="reg">
      <div class="back">
        <p>Already have an account?</p>
        <nuxt-link to="/auth/login"><span>Login</span></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async register() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      }
      axios
        .post('https://ajo-app.herokuapp.com/api/auth/signup', data)
        .then((res) => {
          const userData = res.data
          console.log(userData)
          this.$toasted.show('You have registered successfully', {
            theme: 'primary',
            position: 'top-center',
            duration: 5000,
            type: 'success',
          })
          this.$router.push('/auth/login')
        })
      console.log(this.$store.state.userDetails)
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
        .names {
          display: flex;
          flex-direction: row;
          gap: 20px;
          .name {
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
              width: 170px;
              margin-bottom: 1rem;
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 0.1rem 0.5rem;
            }
          }
        }
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
            img {
              width: 75px;
              background-color: #072ac8;
              color: #fff;
              border-radius: 16px;
              padding: 17px 29px;
              transition: transform ease-in-out 200ms;
            }
            img:nth-child(2) {
              width: 85px;
            }
            img:nth-child(1) {
              width: 80px;
            }
            img:hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }

    .reg {
      margin-top: 81px;
      bottom: 23px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Brown';
      .btn {
        margin-bottom: 5px;
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
      margin-top: 10px;
    }
  }
}
</style>
