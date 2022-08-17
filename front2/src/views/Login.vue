<script>
export default{
    name:"login",
    data: ()=> ({
        compteur:10,
        fruits:["pomme", "fraise", "abricot"],
        nouveauFruit:"noix de coco",
        classCss: "image"     
    }),
    methods: {
        incremente() {
            this.compteur++;
        },
        ajouteFruit() {
            this.fruits.push(this.nouveauFruit)
        }
    }

}

</script>

<template>

    <div>
              <!-- zone de connexion -->                        
        <h2>Connexion</h2>
        
        <div>
            <label><b>Adresses e-mails</b></label>
            <input type="text" placeholder="Adresse e-mail" name="email" required>
        </div>

        <div>
            <label><b>Mot de passe</b></label>
            <input type="password" placeholder="Votre mot de passe" name="password" required>
        </div>

        <div>
            <input type="submit" id='submit' value='Connectez-vous' >
        </div>
    </div>   

</template>

<style scoped>

</style>