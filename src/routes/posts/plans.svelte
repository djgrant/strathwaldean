<script>
  import Ghost from "../../components/ghost.svelte";
</script>

<style>
  iframe {
    width: 100%;
    height: 340px;
  }

  @media (min-width: 600px) {
    iframe {
      height: 560px;
    }
  }
</style>

<Ghost title="Proposed designs" date={new Date()}>
  Laura and Rob have been hard at work drawing up plans for the quad. We're over
  the moon to share them with you and get your feedback!
  <iframe
    src="https://docs.google.com/viewer?url=https://www.strathwaldean.org.uk/pdfs/P-101-Proposed-Site-Plan.pdf&embedded=true"
    frameborder="0" />
</Ghost>
