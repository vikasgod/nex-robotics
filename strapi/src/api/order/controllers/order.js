'use strict';

const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: 'rzp_test_ZUg5A0JYhybcqr',
    key_secret: 'MlB1qg7sU9FO9fVTOUYEdVhu',
});

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const data = ctx.request.body;
        try {
            const item = await strapi
                .service("api::product-list.product-list")
                .findOne(data.product_id);
            const options = {
                amount: item.price * 100, // Razorpay expects amount in paisa
                currency: "INR",
                receipt: data.product_id,
            }
            const response = await razorpay.orders.create(options)
            await strapi
                .service("api::order.order")
                .create({ data: { product_id: response.receipt, order_id: response.id, price: item.price, email: data.email, name: data.name } });
            return { razorpayData: response };
        } catch (error) {
            console.error(`Error unable to create a order ${error.message}`);
        }
    }
}));
