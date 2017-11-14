<template>
  <div class="air-param">
    <div class="air-param--block">
        <form action="#" method="post" name="profile" class="air-param-form--profile">
          <fieldset>
            <legend>Mon profil</legend>
            <label for="lastnameProfile">
              Nom : <input type="text" name="lastnameProfile" placeholder="Nom">
            </label>
            <label for="firstnameProfile">
                Prénom : <input type="text" name = "firstnameProfile" placeholder="Prénom">
            </label>
            <label for="mailProfile">
                Mail: <input type="text" name="mailProfile" placeholder="Mail"> 
            </label>   
           </fieldset>      
        </form>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .air-param {
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #FFD400;
        .air-param--block{
            position: absolute;
            border-radius: 5px;
            left:35%;
            top:30%;
            height:50%;
            width: 30%;
            margin: auto;
            border: 1px solid black;
            box-shadow: 10px 5px 5px black;
            background-color: #FFF;
            .air-param-form--profile{
            position: relative;
            display: flex;
            flex-direction: column;
            top:10px;
            height: 100%;
            width: 100%; 
            margin: auto;
                input{
                    text-align: center;
                    border-radius: 5px;
                    width: 100%;
                    height: 30px;
                    margin-left: auto;
                    margin-right:auto;
                    margin-top: 15px;
                    
                }
        

                    
        }

        }
  }
</style>

