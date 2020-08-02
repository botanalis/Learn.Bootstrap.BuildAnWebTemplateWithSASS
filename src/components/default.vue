<template>
  <div>
    <myHeader></myHeader>
    <section class="section-showcase">
      <div class="container showcase-content">
        <h1>Bootstrap HTML5 Template</h1>
        <p class="lead">
          A clean and versatile <strong>Bootstrap 3</strong>  theme<br> A responsive design for your business and products
        </p>
        <div class="downloads">
          <a href="#"><img src="../../public/img/btn-download.png" alt="下載"></a>
          <a href="#"><img src="../../public/img/btn-appstore.png" alt="下載"></a>
        </div>
      </div>
    </section>
    <section class="section-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form class="search">
              <div>
                <input type="search" placeholder="Search Our Website & Products">
                <button type="submit" value=""><img src="/img/search.png" alt="Search"></button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="block block-primary">
              <h3><i class="fa fa-check"></i>Sleek</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus. Cras condimentum porttitor enim a egestas. Suspendisse potenti
              </p>
              <a href="#" class="btn btn-default">Read More</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block block-secondary">
              <h3><i class="fa fa-check"></i> Responsive</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus. Cras condimentum porttitor enim a egestas. Suspendisse potenti
              </p>
              <a href="#" class="btn btn-default">Read More</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block block-primary">
              <h3><i class="fa fa-check"></i> Clean</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus. Cras condimentum porttitor enim a egestas. Suspendisse potenti
              </p>
              <a href="#" class="btn btn-default">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="no-pad-top">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="block block-light block-center">
              <i class="fa fa-html5 fa-primary fa-6 fa-border"></i>
              <h3 class="heading-primary">Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="block block-light block-center">
              <i class="fa fa-pie-chart fa-primary fa-6 fa-border"></i>
              <h3 class="heading-primary">Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="block block-light block-center">
              <i class="fa fa-unlock-alt fa-primary fa-6 fa-border"></i>
              <h3 class="heading-primary">Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="block block-light block-center">
              <i class="fa fa-question-circle fa-primary fa-6 fa-border"></i>
              <h3 class="heading-primary">Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-light extra-pad">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="page-header">Use <span class="em-primary">VueApp</span> on All Devices</h2>
            <ul class="list list-feature">
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
            </ul>
            <br>
            <a href="#" class="btn btn-primary btn-lg">Read More</a>
          </div>
          <div class="col-md-6">
            <img class="device device-small" src="../../public/img/device-imac.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section-primary extra-pad">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img class="device device-small" src="../../public/img/device-iphone.png">
          </div>
          <div class="col-md-6">
            <h2 class="page-header">Try SkyApp For 30 Days FREE!</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus et odio.</p>
            <a href="#" class="btn btn-lg btn-default btn-rounded">Start Trial</a>
          </div>
        </div>
      </div>
    </section>
    <myFooter></myFooter>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";


export default {
name: "default",
  components: {
    myHeader: Header,
    myFooter: Footer,
  }
}
</script>

<style scoped>

</style>
