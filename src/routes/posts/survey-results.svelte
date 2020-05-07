<script context="module">
  import Ghost from "../../components/ghost.svelte";
</script>

<script>
  function drawSummary() {
    var query = new google.visualization.Query(
      "https://docs.google.com/spreadsheets/d/164Z5ImuINGSdbeDQzD6_OZBrM_vLjL_XbHJ9Hp40IxE/edit?sheet=MostPopular&range=A1:D100"
    );
    query.send(response => {
      var element = document.getElementById("chart-most-popular");
      var data = response.getDataTable();
      var chart = new google.charts.Bar(element);
      chart.draw(
        data,
        google.charts.Bar.convertOptions({
          width: 2200,
          height: 220,
          colors: ["#359b35", "#cc9600", "#91241a"],
          backgroundColor: "none",
          bars: "vertical",
          legend: { position: "left" },
        })
      );
    });
  }

  function drawMostPopular() {
    var query = new google.visualization.Query(
      "https://docs.google.com/spreadsheets/d/164Z5ImuINGSdbeDQzD6_OZBrM_vLjL_XbHJ9Hp40IxE/edit?sheet=LeastPopular&range=A1:D100"
    );
    query.send(response => {
      var element = document.getElementById("chart-least-popular");
      var data = response.getDataTable();
      var chart = new google.charts.Bar(element);
      chart.draw(
        data,
        google.charts.Bar.convertOptions({
          width: 2200,
          height: 220,
          backgroundColor: "none",
          colors: ["#359b35", "#cc9600", "#91241a"],
          bars: "vertical",
          legend: { position: "left" },
        })
      );
    });
  }

  function drawCharts() {
    drawSummary();
    drawMostPopular();
  }

  function initCharts() {
    google.charts.load("current", { packages: ["bar"] });
    google.charts.setOnLoadCallback(drawCharts);
  }
</script>

<style>
  .chart {
    min-height: 220px;
    margin-top: 30px;
    margin-bottom: 20px;
    padding-bottom: 16px; /* scroll bars */
    color: #999;
  }

  .chart.full-width {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 760px) {
    .chart {
      margin-left: 0;
      margin-right: -20px;
    }
    .chart.full-width {
      padding-left: 4px;
    }
  }
</style>

<svelte:head>
  <script
    defer
    async
    on:load={initCharts}
    type="text/javascript"
    src="https://www.gstatic.com/charts/loader.js">

  </script>
  <title>Survey Results | Strathwaldean Quad</title>
</svelte:head>

<Ghost title="Survey Results" date={new Date('2020-05-07')}>
  <p>
    A couple of weeks ago residents were invited to complete a survey on what
    they'd like to see in the quad. As promised, here are the results.
  </p>
  <h4>Most popular</h4>
  <div class="full-width chart scroll-x" id="chart-most-popular" />
  <p>
    From 46 completed surveys, this chart shows the most popular options by
    weighting likes against disklikes. Raised vegetable beds, for example,
    didn't get as many likes as other, lower ranked, options, but they also got
    fewer dislikes so have ended up higher in the rankings.
  </p>
  <h3>Themes</h3>
  <p>
    There were lots of wonderful comments left in the survey. From them, a few
    themes emerged.
  </p>
  <h4>A space for nature</h4>
  <ul class="italic">
    <li>The more greenage and flowers the better</li>
    <li>My only request is making the space as ‘eco friendly’ as possible</li>
    <li>Why cover ground in decking? Unfriendly to nature.</li>
  </ul>

  <h4>A community space</h4>
  <ul class="italic">
    <li>
      The idea to create a garden space to bring back the old tenament community
      is fantastic
    </li>
    <li>
      To see this space utilized both as a community space and as a response to
      environmental action is wonderful!
    </li>
    <li>
      Would like to see the space, if it is to be used, truly communal as a
      garden
    </li>
  </ul>

  <h4>Somewhere to relax</h4>
  <ul class="italic">
    <li>
      I would just be happy with somewhere unshaded to sit and enjoy days like
      today. Love that it can be a place for everyone to enjoy.
    </li>
    <li>
      Somewhere nice to sit out when the weather is good would be amazing. So a
      big lawn would be great.
    </li>
    <li>
      It would be great to have plenty of seating areas for all to enjoy. I
      enjoy reading outside so I find this possibility quite exciting.
    </li>
  </ul>

  <h3>Concerns</h3>

  <p>
    It was also good to see thoughtful concerns and potential problems getting
    flagged as well.
  </p>

  <h4>Least popular</h4>
  <div class="full-width chart scroll-x" id="chart-least-popular" />

  <!-- <h3>Themes</h3> -->
  <p>
    Most of the concerns raised in the comments pointed to a couple of key
    issues. It's particularly worth noting that despite a BBQ area being a
    fairly popular option, it also gave rise to the most concerns in the
    comments.
  </p>
  <h4>Maintenance</h4>
  <ul class="italic">
    <li>
      I would prefer just benches as picnic tables might encourage litter and
      vermin
    </li>
    <li>
      I'm not fond of a pond being in the back quad, to maintain it would be a a
      challenge.
    </li>
    <li>
      Preferably ideas that can be easily maintained and won't create
      disagreements with the residents
    </li>
    <li>
      The BBQ space and pizza oven could be something that could get messy and
      need more upkeep
    </li>
  </ul>

  <h4>Noise</h4>
  <ul class="italic">
    <li>
      Fires and BBQs or music should not be allowed on site as this will blow
      smoke into people’s houses and this is completely unfair on those that
      wish to have fresh air and peace
    </li>
    <li>Dislike stage and decking especially as opens to noise issues!</li>
    <li>
      Talking to other residents there may need to be curfew times agreed for
      gatherings outside and respect for other resident's washing if we install
      a BBQ/pizza ove
    </li>
    <li>
      It will be really nice to have a nice open space that can be used by
      everyone but is respectful to neighbours who might not want people out
      there late/noise.
    </li>
  </ul>

  <h2>Other ideas</h2>
  <p>
    The survey included a box for other ideas. Of course, we haven't had a
    chance to vote on these but there are some interesting suggestions, and by
    now we should have a fairly good grasp of the sort of things that would be
    popular or not.
  </p>
  <ul class="italic">

    <li>Bike racks</li>
    <li>Some sort of sheltered area perhaps</li>
    <li>Let the area go back to nature, for nature</li>
    <li>
      Controversial and unlikely to be popular, but I would be keen for a mini
      football pitch right in the middle
    </li>
    <li>Fire pit</li>
    <li>Pallet furniture</li>
    <li>
      A putting green. Some trees to be trimmed to allow additional sunlight.
    </li>

    <li>Residents give the use of a wheelie bin each for garden refuse</li>

    <li>Wild flowers (meadow) to encourage insects that are struggling</li>
    <li>
      Keep as many of the trees as poss to keep the natural flora and fauna and
      wildlife about
    </li>
    <li>
      Water butts if possible. Rainwater is better for crops and gardens than
      mains water.
    </li>
    <li>Boundary fencing round perimeter</li>
    <li>Basketball net</li>
    <li>Ash tray or bin for smokers to dispose of cigarette filters safely</li>
  </ul>

  <h2>Next steps</h2>
  <p>
    From here, the challenge is to take on board the feedback from the survey
    and form a plan that works for the whole community of residents.
  </p>
</Ghost>
