<template>
  <div class="air-param">
    <div class="air-param--block">
        <form class="air-param--form">
           <input type="text" name="nameText" placeholder="Nom">
           <input type="text" placeholder="Prénom">
           <input type="text" placeholder="Mail">
           
            
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
        .air-param--block{
            position: absolute;
            border-radius: 5px;
            left:35%;
            top:30%;
            height:50%;
            width: 50%;
            margin: auto;
            border: 1px solid black;
            box-shadow: 10px 5px 5px black;
            .air-param--form{
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
                    width: 50%;
                    height: 30px;
                    margin-left: auto;
                    margin-right:auto;
                    margin-top: 15px;
                    
                }
        

                    
        }

        }
  }
</style>

