<template>
  <div class="checkout">
    <div class="product-big-title-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-bit-title text-center">
              <h2>Оформление заказа</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="product-content-right">
              <div class="woocommerce">
                <form
                  enctype="multipart/form-data"
                  action="#"
                  class="checkout"
                  method="post"
                  name="checkout"
                >
                  <div id="customer_details">
                    <div class="woocommerce-billing-fields">
                      <h3>Billing Details</h3>
                      <p
                        id="billing_last_name_field"
                        class="form-row form-row-last validate-required"
                      >
                        <label class="" for="billing_last_name"
                          >Фамилия
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_last_name"
                          name="billing_last_name"
                          class="input-text"
                        />
                      </p>
                      <p
                        id="billing_first_name_field"
                        class="form-row form-row-first validate-required"
                      >
                        <label class="" for="billing_first_name"
                          >Имя
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_first_name"
                          name="billing_first_name"
                          class="input-text"
                        />
                      </p>

                      <div class="clear"></div>

                      <p
                        id="billing_middle_name"
                        class="form-row form-row-wide"
                      >
                        <label class="" for="middle_name">Отчество</label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="middle_name"
                          name="middle_name"
                          class="input-text"
                        />
                      </p>
                      <p
                        id="billing_country_field"
                        class="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                      >
                        <label class="" for="billing_country">Страна </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_first_name"
                          name="billing_country"
                          class="input-text"
                        />
                      </p>
                      <p
                        id="billing_address_1_field"
                        class="form-row form-row-wide address-field validate-required"
                      >
                        <label class="" for="billing_address_1">Город </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Street address"
                          id="billing_address_1"
                          name="billing_address_1"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_address_2_field"
                        class="form-row form-row-wide address-field"
                      >
                        <label for="billing_address_2">Улица</label>
                        <input
                          type="text"
                          value=""
                          placeholder="Apartment, suite, unit etc. (optional)"
                          id="billing_address_2"
                          name="billing_address_2"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_city_field"
                        class="form-row form-row-wide address-field validate-required"
                        data-o_class="form-row form-row-wide address-field validate-required"
                      >
                        <label class="" for="billing_city">Дом </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Town / City"
                          id="billing_city"
                          name="billing_city"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_state_field"
                        class="form-row form-row-first address-field validate-state"
                        data-o_class="form-row form-row-first address-field validate-state"
                      >
                        <label class="" for="billing_state">Квартира</label>
                        <input
                          type="text"
                          id="billing_state"
                          name="billing_state"
                          placeholder="State / County"
                          value=""
                          class="input-text"
                        />
                      </p>
                      <p
                        id="billing_postcode_field"
                        class="form-row form-row-last address-field validate-required validate-postcode"
                        data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                      >
                        <label class="" for="billing_postcode"
                          >Postcode
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Postcode / Zip"
                          id="billing_postcode"
                          name="billing_postcode"
                          class="input-text"
                        />
                      </p>

                      <div class="clear"></div>

                      <p
                        id="billing_email_field"
                        class="form-row form-row-first validate-required validate-email"
                      >
                        <label class="" for="billing_email">Email </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_email"
                          name="billing_email"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_phone_field"
                        class="form-row form-row-last validate-required validate-phone"
                      >
                        <label class="" for="billing_phone"
                          >Телефон
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_phone"
                          name="billing_phone"
                          class="input-text"
                        />
                      </p>
                      <div class="clear"></div>
                    </div>
                  </div>

                  <h3 id="order_review_heading">Ваш заказ</h3>

                  <div id="order_review" style="position: relative">
                    <table class="shop_table">
                      <thead>
                        <tr>
                          <th class="product-name">Товар</th>
                          <th class="product-total">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="product in products" :key="product.id" class="cart_item">
                          <td class="product-name">
                            {{product.name}}
                            <strong class="product-quantity">× {{product.quantity}}</strong>
                          </td>
                          <td class="product-total">
                            <span class="amount">{{product.totalPrice}}&#8381;</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr class="order-total">
                          <th>Сумма заказа</th>
                          <td>
                            <strong><span class="amount">{{totalPrice}}&#8381;</span></strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>

                    <div id="payment">
                      <ul class="payment_methods methods">
                        <li class="payment_method_bacs">
                          <input
                            type="radio"
                            data-order_button_text=""
                            checked="checked"
                            value="bacs"
                            name="payment_method"
                            class="input-radio"
                            id="payment_method_bacs"
                          />
                          <label for="payment_method_bacs"
                            >Direct Bank Transfer
                          </label>
                          <div class="payment_box payment_method_bacs">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </li>
                        <li class="payment_method_cheque">
                          <input
                            type="radio"
                            data-order_button_text=""
                            value="cheque"
                            name="payment_method"
                            class="input-radio"
                            id="payment_method_cheque"
                          />
                          <label for="payment_method_cheque"
                            >Cheque Payment
                          </label>
                          <div
                            style="display: none"
                            class="payment_box payment_method_cheque"
                          >
                            <p>
                              Please send your cheque to Store Name, Store
                              Street, Store Town, Store State / County, Store
                              Postcode.
                            </p>
                          </div>
                        </li>
                        <li class="payment_method_paypal">
                          <input
                            type="radio"
                            data-order_button_text="Proceed to PayPal"
                            value="paypal"
                            name="payment_method"
                            class="input-radio"
                            id="payment_method_paypal"
                          />
                          <label for="payment_method_paypal"
                            >PayPal
                            <img
                              alt="PayPal Acceptance Mark"
                              src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                            /><a
                              title="What is PayPal?"
                              onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                              class="about_paypal"
                              href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
                              >What is PayPal?</a
                            >
                          </label>
                          <div
                            style="display: none"
                            class="payment_box payment_method_paypal"
                          >
                            <p>
                              Pay via PayPal; you can pay with your credit card
                              if you don’t have a PayPal account.
                            </p>
                          </div>
                        </li>
                      </ul>

                      <div class="form-row place-order">
                        <input
                          type="submit"
                          data-value="Place order"
                          value="Place order"
                          id="place_order"
                          name="woocommerce_checkout_place_order"
                          class="button alt"
                        />
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: this.$store.state.localStorage.cart,
    };
  },
  head: {
    title: 'Оформление заказа | ElectroStore'
  },
  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.products) {
        total += item.totalPrice;
      }

      return total;
    },
  },
};
</script>