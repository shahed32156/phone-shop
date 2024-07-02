import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './NAVBAR/Nav';
import About from './ABOUT/About';
import Footer from './FOOTER/Footer';
import Contact from './CONTACT/Contact';
import ClockLoader from "react-spinners/ClockLoader";
import RevealOnScroll from './HOOK/RevealOnScroll';
import Carousel from './CAROUSEL/Carousel';
import Signin from './SIGNIN/Signin';
import Signup from './SIGNUP/Signup';
import Admin_signin from './ADMIN_SIGNIN/Admin_signin';
import Admin_panel from './ADMIN_PANEL/Admin_panel';
import Forgot_pass from './SIGNIN/Forgot_pass';
import Services from './SERVICES/Services';
import Featured from './FEATURED/Featured';
import Offers from './OFFERS/Offers';
import Blogs from './BLOGS/Blogs';
import Products from './PRODUCTS/Products';
import Iphone from './IPHONE/Iphone';
import Samsung from './SAMSUNG/Samsung';
import OnePLus from './ONEPLUS/OnePlus';
import Pixel from './PIXEL/Pixel';
import Realme from './REALME/Realme';
import Redmi from './REDMI/Redmi';
import Buy from './BUY_PRODUCTS/Buy';
import Cart from './CART/Cart';
import Review from './REVIEW/Review';

function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <ClockLoader  color="#c2185B" />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route
                path="/about"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <About />
                    </RevealOnScroll>
                    
                  </>
                }
              />
             
             <Route path='/signin' element={


               <>
               
               <Carousel />
                    <RevealOnScroll>
                      <Signin />
                    </RevealOnScroll>
               
               </>


             }
             
             />


             <Route path='/signup' element={


                <>
                
                <Carousel />
                    <RevealOnScroll>
                      <Signup />
                    </RevealOnScroll>
                
                
                </>  


             }
             
             />


              <Route path='/signin' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Signin />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/forgot_password' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Forgot_pass />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/admin_signin' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Admin_signin />
                  </RevealOnScroll>


              </>  


              }

              />

             <Route 
             
             
             path='/contact' element={

         
              <>
              
                    <RevealOnScroll>
                    <Carousel />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Contact />
                    </RevealOnScroll>
            
              
              </>

             }
             
             
             />
             

             <Route path='/products' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
              
                    <Products />


              </>  


              }

              />


              <Route path='/iphone' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <Iphone />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/samsung' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <Samsung />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/oneplus' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <OnePLus />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/pixel' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <Pixel />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/realme' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <Realme />
                  </RevealOnScroll>


              </>  


              }

              />


              <Route path='/redmi' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <Redmi />
                  </RevealOnScroll>


              </>  


              }

              />


              <Route path='/buy' element={


              <>

              <RevealOnScroll>

              <Carousel />

              </RevealOnScroll>
                  <RevealOnScroll>
                    <Buy />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/review' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Review />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/cart' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Cart />
                  </RevealOnScroll>


              </>  


              }

              />


              <Route path='/admin_panel' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Admin_panel />
                  </RevealOnScroll>


              </>  


              }

              />  




 



              <Route
                path="/home"
                element={
                  <>
                    <RevealOnScroll>

                    <Carousel />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Services />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Featured />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Offers />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Blogs />

                    </RevealOnScroll>

                  </>
                }
              />

                <Route
                path="/*"
                element={
                  <>
                    <RevealOnScroll>

                    <Carousel />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Services />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Featured />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Offers />

                    </RevealOnScroll>

                    <RevealOnScroll>

                    <Blogs />

                    </RevealOnScroll>

                  </>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
