import React from 'react'

const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer
          class="text-center text-lg-start text-white"
          style={{ "background-color": "black" }}
        >
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <div className='footer_logo'>
                    <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
                    <span>COURSE</span>
                  </div>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Menu</h6>
                  <p>
                    <a class="text-white">Home</a>
                  </p>
                  <p>
                    <a class="text-white">About Us</a>
                  </p>
                  <p>
                    <a class="text-white">BrandFlow</a>
                  </p>
                  <p>
                    <a class="text-white">News</a>
                  </p>
                  <p>
                    <a class="text-white">Contact</a>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Usefull links
                  </h6>
                  <p>
                    <a class="text-white">Testimonials</a>
                  </p>
                  <p>
                    <a class="text-white">FAQ</a>
                  </p>
                  <p>
                    <a class="text-white">Community</a>
                  </p>
                  <p>
                    <a class="text-white">Campus Pictures</a>
                  </p>
                  <p>
                    <a class="text-white">Tuitions</a>
                  </p>
                </div>
                <hr class="w-100 clearfix d-md-none" />
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </section>
            <hr class="my-3" />
            <section class="p-3 pt-0">
              <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                  <div class="p-3">
                  Copyright ©2024 All rights reserved | This template is made with  by Colorlib
                    
                  </div>
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-twitter"></i
                  ></a>
                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-google"></i
                  ></a>
                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer