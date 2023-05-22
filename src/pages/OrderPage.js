import React from "react"
import ProductRow from "../components/ProductRow"
import products from "../data/products.mjs"

function OrderPage() {

    return (
        <>
            <h2>Pet Product Order Form</h2>
            <article id="orderDescription">
                <p>
                    On this page you can order an item for your favorite pet! Whether it is a foldable pool for a pup that is trying to cool off, or a 
                    state-of-the-art cat hamster wheel for a cat that needs to blow off some steam, we have the items to bring your pet maximum happiness!
                </p>
                <form action="/order" method="POST">

                    <fieldset>
                        <legend>Please submit your contact information below</legend>
                        <label htmlFor="name" className="required">First and Last Name</label>
                        <input type="text" name="name" id="name" placeholder="Firstname Lastname" required autoFocus />
                        <label htmlFor="email" className="required">Email</label>
                        <input type="email" name="email" id="email" placeholder="email@domain.com" required />
                        <label htmlFor="address" className="required">Street Address</label>
                        <input type="text" name="address" id="address" placeholder="123 Street, City, State, Zip" autoComplete="street-address" required />
                        <label htmlFor="delivery" id="delivery">Delivery Instructions</label>
                        <textarea name="delivery" id="delivery" placeholder="Insert any specific delivery instructions here..." rows="7" cols="50"></textarea>
                    </fieldset>

                    <fieldset>
                        <legend>Order products here</legend>
                        <table>
                            <caption>Pet Products</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Choice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, i) => <ProductRow product={product} key={i}/>)}
                            </tbody>
                        </table>
                    </fieldset>

                    <fieldset>
                        <legend>Press the Submit button when you are ready to confirm your order</legend>
                        <button onClick={e => {
                            alert("Thanks for odering with us!")
                            e.preventDefault();
                        }}>Submit</button>
                        
                    </fieldset>
                </form>
            </article>
        </>
    )
}

export default OrderPage;

           