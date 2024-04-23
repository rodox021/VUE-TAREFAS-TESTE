<template>
    <div>

        <div class="container">
            <h1 class="display-4">{{ title }}</h1>
            <p class="lead">
                Pagina de controle do {{ title }}
            </p>
        </div>
        
        <hr/>

    </div>
</template>

<script>
export default {
    name: 'TituloPrincipal',
    props: {
        title: String
    }
}
</script>

<style scoped>
hr{
   color:green;
    margin: 50px 0px 50px 0px;
}
</style>