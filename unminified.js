<!-- Google Analytics -->
<script>
// Creates an initial ga() function.
// The queued commands will be executed once analytics.js loads.
window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments)
};

// Sets the time (as an integer) this tag was executed.
// Used for timing hits.
ga.l = +new Date;

// Creates a default tracker with automatic cookie domain configuration.
ga('create', 'UA-XXXXX-Y', 'auto');

// Sends a pageview hit from the tracker just created.
ga('send', 'pageview');
</script>

<!-- Sets the `async` attribute to load the script asynchronously. -->
<script async src='//www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
