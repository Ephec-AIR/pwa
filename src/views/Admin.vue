<template>
  <div>
    <form id=flogin @submit.prevent="login">
      <fieldset>
        <legend>Login</legend>
        <p>
          <label for=login>Username/Email: </label>
          <input type=text name=login v-model="username" required>
        </p>
        <p>
          <label for=password>Password: </label>
          <input type=password name=password v-model="password" required>
        </p>
        <p>
          <input type=submit value="Se connecter">
        </p>
      </fieldset>
    </form>
    <form id=fprofile @submit.prevent="logout">
      <fieldset>
        <legend>Profile</legend>
        <p>
          <label for=login>Connecté en temps que: </label>
          <input type=text name=login v-model="user.username" readonly>
        </p>
        <p>
          <label for=isadmin>Admin ? </label>
          <input type=checkbox disabled v-model="user.isAdmin">
        </p>
        <p>
          <input type=submit value="Se déconnecter">
        </p>
      </fieldset>
    </form>
    <form id=faddocr @submit.prevent="createOCR">
      <fieldset>
        <legend>Créer un OCR</legend>
        <p>
          <input type=submit value="Créer">
        </p>
        <p>
          <label for=serial>Serial:</label>
          <input type=text name=serial v-model="ocr.serial" readonly>
        </p>
        <p>
          <label for=ocr_secret>OCR Secret:</label>
          <input type=text name=ocr_secret v-model="ocr.ocr_secret" readonly>
        </p>
        <p>
          <label for=user_secret>User Secret:</label>
          <input type=text name=user_secret v-model="ocr.user_secret" readonly>
        </p>
      </fieldset>
    </form>
    <form @submit.prevent="toggleAdmin">
      <fieldset>
        <legend>Changer le statut</legend>
        <p>
          <label for=serial>Username:</label>
          <input type=text name=serial v-model="admin.username">
        </p>
        <p>
          <label for=ocr_secret>Admin ?</label>
          <input type="checkbox" name=ocr_secret v-model="admin.isAdmin">
        </p>
        <p>
          <input type=submit value="Changer le statut">
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import Constant from '../constants';

  export default {
    data () {
      return {
        username: '',
        password: '',
        user: {},
        ocr: {},
        admin: {
          username: '',
          isAdmin: false
        }
      }
    },
    methods: {
      login () {
        const data = JSON.stringify({
          username: this.username,
          password: this.password
        });

        fetch(`${Constant.API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data
        })
        .then(res => res.json())
        .then(json => {
          this.user.token = json.token;
          this.user = {...this.user, ...jwt_decode(user["token"])}
        })
        .catch(err => console.error(err));
      },
      logout () {
        this.user = {}
      },
      createOCR () {
        fetch(`${Constant.API_URL}/product`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${user.token}`
          }
        })
        .then(response => response.json())
        .then(response => this.ocr = response)
        .catch(err => console.error(err));
      },
      toggleAdmin () {
        fetch(`${Constant.API_URL}/admin`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${user.token}`
          },
          data: JSON.stringify({
            username: this.admin.username,
            admin: this.admin.isAdmin
          })
        }).then(response => {
          if (response.status === 200) {
            const isAdminMsg = this.admin.isAdmin ? 'admin' : 'non-admin';
            this.$store.commit('TOAST_MESSAGE', {
              messages: [`${this.admin.username} est maintenant ${isAdminMsg}`]
            });
          }
        }).catch(err => console.error(err));
      }
    }
  }
</script>

<style lang="scss" scoped>
  input[type=checkbox] {
    position: relative;
    top: 2px;
  }
</style>
