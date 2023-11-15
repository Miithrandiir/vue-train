<template>
    <div id="login-page">
        <div class="card">
            <div class="card-header">
                <h1>Connexion</h1>
            </div>

            <form class="form">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <button type="submit" class="full success">Se connecter</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>