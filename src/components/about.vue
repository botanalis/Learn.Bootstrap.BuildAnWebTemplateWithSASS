<template>
  <div>
    <section class="section-main">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div>
              <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
              >
                <!-- Slides with custom text -->
                <b-carousel-slide img-src="/img/slide1.jpg">
                </b-carousel-slide>

                <b-carousel-slide img-src="/img/slide2.jpg">
                </b-carousel-slide>

                <b-carousel-slide img-src="/img/slide3.jpg">
                </b-carousel-slide>

              </b-carousel>
            </div>

            <h2 class="page-header heading-primary-a">About</h2>
            <p>In lacinia ipsum sit amet ultricies semper. Nulla facilisi. Proin et nulla consequat mauris gravida vestibulum. Donec non risus et velit auctor lobortis. Aliquam in placerat justo. Etiam nisi libero, suscipit vel nulla eget, blandit ultricies quam. Nunc pretium pharetra tellus sed suscipit. Fusce rhoncus metus est, quis facilisis eros luctus vestibulum. Morbi vestibulum, urna vitae feugiat tincidunt, urna magna pharetra enim, id congue lectus elit sit amet quam. Vivamus sit amet enim eros. Etiam nec molestie risus.</p>
            <p>Donec non est gravida, condimentum mauris sed, bibendum lectus. Duis posuere turpis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mattis feugiat aliquam. Cras luctus magna tellus. Nullam consequat vitae sem nec luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer sodales congue nibh, quis pharetra dui tincidunt sit amet. Nunc suscipit, velit ut aliquet interdum, sapien metus gravida dui, in varius tortor justo a leo. Pellentesque auctor purus sed placerat gravida. Proin ac lobortis est. Cras pharetra pharetra maximus. Sed tellus neque, blandit sit amet sollicitudin eget, finibus quis felis. Morbi velit nibh, aliquam eu pharetra eget, tempus placerat metus. Nullam cursus suscipit quam, in vestibulum quam lobortis id.</p>
          </div>
          <div class="col-md-4">
            <h2 class="page-header">Lorem Ipsum</h2>
            <ul class="list list-feature">
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
              <li><i class="fa fa-check fa-6 fa-primary"></i> <span>Lorem ipsum dolor</span></li>
            </ul>
            <br>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="light">
                    <span class="em-primary">Who</span> We Are
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>IAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="light">
                    <span class="em-primary">What</span> We Do
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="light">
                    <span class="em-primary">Why</span> Choose Us?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="page-header heading-secondary-a">Meet Our Team</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="block block-light block-center block-image block-border">
              <img src="img/headshot1.jpg">
              <h3>Jane Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="block block-center block-image block-border">
              <img src="img/headshot2.jpg">
              <h3>Jane Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="block block-light block-center block-image block-border">
              <img src="img/headshot3.jpg">
              <h3>Jane Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="block block-center block-image block-border">
              <img src="img/headshot4.jpg">
              <h3>Jane Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra varius maximus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-primary-b">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <blockquote class="blockquote blockquote-reverse">
              <h1>"I do not believe you can do today's job with yesterday's methods and be in business tomorrow"</h1>
              <em>Nelson Jackson</em>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "about",
  data(){
    return {
      slide: 0,
      sliding: null
    }
  },
  methods:{
    onSlideStart(){
      this.sliding = true;
    },
    onSlideEnd(){
      this.sliding = false;
    }
  }
}
</script>

<style scoped>

</style>
