<template>
    <div>
        <div>
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                    <b-nav-item to="/home">Home</b-nav-item>
                    <b-nav-item to="/Alunos">Tarefas</b-nav-item>

                    <!-- Navbar dropdowns -->
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="User" right>
                        <b-dropdown-item href="#">Account</b-dropdown-item>
                        <b-dropdown-item href="#">Settings</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menuNavBar'

}
</script>

<style scoped></style>