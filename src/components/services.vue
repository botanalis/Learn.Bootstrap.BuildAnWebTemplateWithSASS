<template>
  <div>
    <section class="section-main">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="page-header heading-primary-a">Services</h2>
            <p>In lacinia ipsum sit amet ultricies semper. Nulla facilisi. Proin et nulla consequat mauris gravida vestibulum. Donec non risus et velit auctor lobortis. Aliquam in placerat justo. Etiam nisi libero, suscipit vel nulla eget, blandit ultricies quam. Nunc pretium pharetra tellus sed suscipit. Fusce rhoncus metus est, quis facilisis eros luctus vestibulum. Morbi vestibulum, urna vitae feugiat tincidunt, urna magna pharetra enim, id congue lectus elit sit amet quam. Vivamus sit amet enim eros. Etiam nec molestie risus.</p>
            <p>Donec non est gravida, condimentum mauris sed, bibendum lectus. Duis posuere turpis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mattis feugiat aliquam. Cras luctus magna tellus. Nullam consequat vitae sem nec luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer sodales congue nibh, quis pharetra dui tincidunt sit amet. Nunc suscipit, velit ut aliquet interdum, sapien metus gravida dui, in varius tortor justo a leo. Pellentesque auctor purus sed placerat gravida. Proin ac lobortis est. Cras pharetra pharetra maximus. Sed tellus neque, blandit sit amet sollicitudin eget, finibus quis felis. Morbi velit nibh, aliquam eu pharetra eget, tempus placerat metus. Nullam cursus suscipit quam, in vestibulum quam lobortis id.</p>
            <br><br>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="light">
                    Service One
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="light">
                    Service Two
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="light">
                    Service Three
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="col-md-4">

            <div class="tab tab-primary">
              <b-tabs content-class="mt-3">
                <b-tab title="Services">
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </b-tab>
                <b-tab title="About">
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </b-tab>
                <b-tab title="Support">
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </b-tab>
              </b-tabs>
            </div>

            <div class="block block-primary-head no-pad">
              <h3><i class="fa fa-pencil"></i> Quick Quote</h3>
              <div class="block-content">
                <form role="form">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="Enter name">
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" placeholder="Enter phone">
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-primary">
      <div class="container">
        <h2 class="page-header">What We Do</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="block block-icon">
              <div class="icon">
                <i class="fa fa-home fa-6"></i>
              </div>
              <div class="icon-content">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block block-icon">
              <div class="icon">
                <i class="fa fa-home fa-6"></i>
              </div>
              <div class="icon-content">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block block-icon">
              <div class="icon">
                <i class="fa fa-home fa-6"></i>
              </div>
              <div class="icon-content">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="block block-icon">
              <div class="icon">
                <i class="fa fa-home fa-6"></i>
              </div>
              <div class="icon-content">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block block-icon">
              <div class="icon">
                <i class="fa fa-home fa-6"></i>
              </div>
              <div class="icon-content">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block block-icon">
              <div class="icon">
                <i class="fa fa-home fa-6"></i>
              </div>
              <div class="icon-content">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "services"
}
</script>

<style scoped>

</style>
