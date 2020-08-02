<template>
  <div>
    <section class="section-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2947.561497782143!2d-71.0621316!3d42.373183600000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370ed675fcd1b%3A0x5309f0ed69db33f1!2s44+Main+St%2C+Boston%2C+MA+02129!5e0!3m2!1sen!2sus!4v1411337388236" width="1600" height="400" frameborder="0" style="border:0"></iframe>
    </section>

    <section class="section-main">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="page-heading">Contact Us</h2>
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
          <div class="col-md-4">
            <div class="block block-primary-head no-pad">
              <h3><i class="fa fa-home"></i> Our Location</h3>
              <div class="block-content">
                <ul class="list-location">
                  <li><h4>SKYAPP, inc</h4></li><hr>
                  <li>44 Main Street</li>
                  <li>Boston MA, 01922</li>
                  <li>Phone: 555-555-5555</li>
                  <li>Fax: 666-666-6666</li>
                </ul>
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
name: "contact"
}
</script>

<style scoped>

</style>
