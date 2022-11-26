<template>
  <div class="container">
    <div class="modal show" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true"
      data-backdrop="false">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Title</h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et diam consectetur, posuere ipsum
              eget, ultricies justo. Fusce ac tincidunt velit. Fusce ac enim id nisl semper vehicula. Sed vestibulum
              felis diam, nec cursus urna porta sit amet. Nulla facilisi. Phasellus vehicula mollis aliquam. Aenean urna
              mauris, accumsan sit amet accumsan quis, lobortis a lacus. Pellentesque posuere odio vel diam tristique
              dapibus. Nunc nisl ipsum, imperdiet faucibus volutpat sed, iaculis eleifend augue. Proin ultricies eget
              metus eu tincidunt. Integer ultrices tellus quis elit convallis auctor. Nunc laoreet tristique libero, ut
              pharetra justo lacinia vitae.Vestibulum ut est ac felis rhoncus gravida. Donec ut fringilla odio. Nulla
              eget velit nec quam varius aliquam eu ut turpis. Donec in nisl quis libero sollicitudin mollis. Duis
              euismod accumsan ultrices. Sed vel quam convallis, dictum augue sit amet, tempus lacus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
              Aliquam ac purus ut urna dignissim sodales id at metus. Quisque volutpat mauris non urna molestie, vitae
              placerat eros pellentesque. Nunc iaculis sapien nec accumsan volutpat. Aliquam est felis, sodales nec
              tincidunt vitae, pretium non mi. In ut massa quis tortor gravida dignissim. Sed eros nunc, ullamcorper
              quis nibh vel, facilisis imperdiet risus. Praesent orci libero, euismod non euismod non, pulvinar nec mi.
              In convallis velit neque, quis feugiat mauris ultricies eget. Aliquam venenatis sagittis tortor, eu
              sodales libero lacinia nec. Aliquam erat volutpat. Cras non arcu maximus, ullamcorper nulla vitae, aliquam
              risus. Lorem ipsum dolor sit amet, conctetur adipiscing elit. Aliquam efficitur massa a lacus scelerisque
              eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <h6>Autor: </h6>
            <h6>Journal: </h6>
            <h6>Data publicada: </h6>
            <h6>Disponí­vel aqui: (link)</h6>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  mounted() {
    window.onload = () => {
      $('#onload').modal('show');
    }
  },

  methods: {
    openModal() {

      var myModal = new bootstrap.Modal(document.getElementById('largeModal'), {
        keyboard: false
      })

      myModal.show()
    }
  },


  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      ],

    }
  }
}
</script>
