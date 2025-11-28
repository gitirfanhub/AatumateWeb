import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import * as variables from "./templates/theme/variables";
import * as serviceWorker from "./serviceWorker";
import { CategoryProvider } from "./context/category_context";
import { ProductProvider } from "./context/product_context";
import { WorkshopProvider } from "./context/workshop_context";
import { BrandsProvider } from "./context/brands_context";
import { CartProvider } from "./context/cart_context";
import { ToastbarProvider } from "./components/Toastbar";
import Loader from "./components/Loader";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={variables}>
      <ToastbarProvider>
        <CategoryProvider>
          <ProductProvider>
            <WorkshopProvider>
              <BrandsProvider>
                <UserProvider>
                  <CartProvider>
                    <Suspense fallback={<Loader />}>
                      <BrowserRouter>
                        <App />
                      </BrowserRouter>
                    </Suspense>
                  </CartProvider>
                </UserProvider>
              </BrandsProvider>
            </WorkshopProvider>
          </ProductProvider>
        </CategoryProvider>
      </ToastbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
