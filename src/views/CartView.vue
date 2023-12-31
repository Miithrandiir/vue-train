<template>
    <BaseLayout>
        <h1>Cart</h1>
        <div class="cart">
            <div class="cart__items">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="cartStore.getItems.length > 0">
                            <tr v-for="item in cart.getItems.value" :key="item.id">
                                <td><b>{{ item.name }}</b></td>
                                <td>{{ item.quantity }}</td>
                                <td>${{ item.price }}</td>
                                <td>${{ item.total }}</td>
                                <td>
                                    <SelectorComponent :value="item.quantity"
                                        @update-value:decrement="updateQuantity(false, item)"
                                        @update-value:increment="updateQuantity(true, item)"></SelectorComponent>
                                </td>
                            </tr>
                        </template>

                        <tr v-else>
                            <td colspan="4" style="text-align: center;">Aucun article ajouté dans le panier</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cart__total">
                <ul>
                    <li data-cy="price_ht">Total H.T: ${{ (cart.totalPrice.value * 0.8).toFixed(2) }}</li>
                    <li data-cy="price_taxes">Taxe (20%) : ${{ (cart.totalPrice.value * 0.2).toFixed(2) }}</li>
                    <li data-cy="price_ttc">Total T.T.C : ${{ cart.totalPrice.value }}</li>
                </ul>

                <button class="cart__total__checkout">Procéder au paiement</button>
            </div>
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
import SelectorComponent from '@/components/SelectorComponent.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { useCartStore } from '@/stores/CartStore';
import { storeToRefs } from 'pinia';
import type Cart from '@/core/Cart';

const cartStore = useCartStore();

let cart = storeToRefs(cartStore);

function updateQuantity(increment: boolean, item: Cart) {
    increment ? cartStore.add(item) : cartStore.remove(item);
}

</script>

<style scoped lang="scss">
h1 {
    text-align: center;
}

.cart {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    width: 75%;
    margin: auto;

    &>.cart__items {
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        padding: 10px;
        width: 50%;

        &>table {
            border-spacing: 5px;
            width: 100%;
            font-family: 'Noto Sans', sans-serif;

            thead {
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            }

            tr {
                margin: 10px;
            }

            td,
            th {
                margin: 0 10px;
                text-align: center;
            }

            th {
                font-weight: bold;
            }
        }
    }

    &>.cart__total {
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        width: 25%;

        &>ul {
            list-style: none;
            padding: 0;
            margin: 0;
            font-family: 'Noto Sans', sans-serif;

            li {
                margin: 10px;
            }
        }

        &>.cart__total__checkout {
            background: #c8938d;
            font-family: 'Noto Sans', sans-serif;
            color: white;
            width: 100%;
            padding: 10px;
            border-radius: 0 0 4px 4px;
            border: none;
            cursor: pointer;
            transition: background 500ms ease-in-out;

            &:hover {
                background: darken(#c8938d, 10%);
            }
        }
    }
}
</style>