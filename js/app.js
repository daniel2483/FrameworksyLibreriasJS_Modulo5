$(document).ready(function(){
  /////////////// Global Variables  ////////////////////
  //console.log("Testing")
  originalColorTitle = $(".main-titulo").css("color");
  changingColorTitle = "white";
  //console.log("Color Orginal: " + originalColorTitle)
  var toChange = 0;
  var countMov = 0;
  var points = 0;

  // Array that contains Objects with a match to then give an effect
  var valueMatchArray = [];
  var uniqueObj = [];

  // Counter for Mathing Deleted
  var machingDeletedCounter = 0;

  // Counter if There is match candies
  var counterMaxPoints = 1;

  // Extra counter to run loop and check if there is new matches after first match
  var repFlag = 0

  // Timer Variable
  var x;
  var timeInterval = 300;

  /////////////// Main ////////////////////

  // Title Effect
  setInterval(title_effect, 1200);

  // To load initial Candies
  loadCandiesInitial();

  //selectCandy();


  //candyEffect(".col-1 > img:nth-child(1)");

  // Countdown timer
  $( '.btn-reinicio' ).click(function(){
    if ($( '.btn-reinicio' ).html() == "Iniciar" ) {
      // To start the select candy function
      selectCandy();
      deleteMatchCandies();
      $( '.btn-reinicio' ).html("Reiniciar")
      var now = new Date().getTime();
      timer(now);
    }
    else  {
      deletingAllCandies();
      loadCandiesInitial();
      selectCandy();
      deleteMatchCandies();


      clearInterval(x);
      countMov = 0;
      points = 0;
      $(".moves > span").text(countMov);
      $(".score > span").text(points);
      $( '.panel-tablero' ).show( 100 );
      $( '.time').show( 100 );
      $( '.end-titulo' ).remove();
      var now = new Date().getTime();
      $( ".panel-score" ).animate({
         width: "25%"
       }, 100);
      timer(now);
    }

  })




  /////////////// Functions ////////////////////

  // 1. Function for Title Effect
  function title_effect (){
    titleStyle = $(".main-titulo");
    //console.log("Changing Style!");
    //console.log(toChange);
    //setInterval(
    //  setTimeout(function(){
    //  if (toChange == 0){
    //    titleStyle.css("color", changingColorTitle);
        //console.log(toChange);
    //    toChange = 0;
    //  }
    //  else {
    //    titleStyle.css("color", originalColorTitle);
    //    //console.log(toChange);
    //    toChange = 1;
    //  }

    //},200),500)

    currentColor = $(".main-titulo").css("color");
    //console.log(currentColor);

    if (currentColor == "rgb(255, 255, 255)"){
      $( ".main-titulo" ).animate({
            //backgroundColor: "#aa0000",
            color: "yellow"
            //width: 500
          }, 800 );
    }
    else{
      $( ".main-titulo" ).animate({
            //backgroundColor: "#aa0000",
            color: "white"
            //width: 500
          }, 800 );
    }

  }

  // 2. Load the candies at the beginning
  function loadCandiesInitial() {
    // J represent column and i represents row
    for (j = 1; j <= 7; j++) {
        //console.log("Column: " + j);
        for (i = 1; i <= 7; i++) {
        randomCandy = Math.floor((Math.random() * 4) + 1);
        candy = randomCandy + ".png"
        //console.log(candy);
        $(".col-" + j).append('<img id="'+ j + i + '" src="image/' + candy + '" height="90px" />')

      }
    }

  }

  // Function to get which div column and which child row
  function selectCandy (){
    //deletingTopLeft();
    $(".moves > span").text(countMov);
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(1)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        candyObject = "." + classColumn + " img:nth-child(1)";
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(2)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(3)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(4)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(5)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(6)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(7)";
      //console.log(i);
      $(object).on('mouseenter mouseup', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
  }


  // Function to define where can be drop a candy
  function makeCandiesDragable_Droppable (classColumn,childIndex){

    dragObject = "." + classColumn + " img:nth-child(" + (childIndex) + ")"
    //console.log(dragObject);
    upPosition = childIndex - 1;
    downPosition = childIndex + 1;
    leftPosition = classColumn[4] - 1;
    RightPosition = leftPosition + 2;
    //console.log("Up: " + upPosition + "  Down: " + downPosition + "  Left: " + leftPosition + "  Right: " + RightPosition)
    row = childIndex;
    column = classColumn[4];
    //console.log("Current Row: " + row + " | Current Column: " + column);

    // Just One element Draggable at the same time
    $(dragObject).draggable({
        revert: true,
        zIndex: 10,
        snapMode: "inner",
        snapTolerance: 40,
        start: function (event, ui) {
        }
    });

    // $(dragObject).draggable( 'enable' )

    // Down movement - Working
    if (row < 7){
      //console.log("Can go down..")
      droppableDownObject = "." + classColumn + " img:nth-child(" + (downPosition) + ")"
      $( droppableDownObject ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});
            image_dest = $( droppableDownObject );
            $( dragObject ).insertAfter( image_dest );

            // Movements Counter
            countMov += 1;

            deletingTopLeft();
            valueMatchArray = [];
            uniqueObj = [];
            repFlag = 0;
            deleteMatchCandies();
            runSelectCandyTime(100);
        }
      });
    }

    // Up movement
    if (row > 1){
      //console.log("Can go up..")
      droppableUpObject = "." + classColumn + " img:nth-child(" + (upPosition) + ")"
      //console.log(droppableDownObject2);
      $( droppableUpObject ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});
            image_dest = $( droppableUpObject );
            $( dragObject ).insertBefore( image_dest );

            // Movements Counter
            countMov += 1;

            deletingTopLeft();
            valueMatchArray = [];
            uniqueObj = [];
            repFlag = 0;
            deleteMatchCandies();
            runSelectCandyTime(100);
        }
      });
    }

    // Right movement
    if (column < 7){
      // console.log("Can go right..")
      droppableRightObject = ".col-" + (leftPosition + 2) + " img:nth-child(" + childIndex + ")";
      draggableObjectLastPositionCol = leftPosition + 1;
      //console.log(draggableObjectLastPositionCol);
      $( droppableRightObject ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});
            image_dest = $( droppableRightObject );
            image_orig = $( dragObject );
            image_orig_down = "." + classColumn + " img:nth-child(" + (childIndex ) + ")"
            console.log((childIndex + 1) )

            $( image_orig ).insertBefore( image_dest );
            $( image_dest ).insertBefore( dragObject );

            //$( ".col-" + (leftPosition + 2) ).prepend( dragObject );
            //$( ".col-" + (leftPosition + 1) ).prepend( droppableRightObject );

            // Movements Counter
            countMov += 1;

            deletingTopLeft();
            valueMatchArray = [];
            uniqueObj = [];
            repFlag = 0;
            deleteMatchCandies();
            runSelectCandyTime(100);
        }
      });
    }

    // Left movement
    if (column > 1){
      // console.log("Can go right..")
      droppableLeftObject = ".col-" + (leftPosition ) + " img:nth-child(" + childIndex + ")";
      draggableObjectLastPositionCol = leftPosition;
      //console.log(draggableObjectLastPositionCol);
      $( droppableLeftObject ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});
            image_dest = $( droppableLeftObject );
            image_orig = $( dragObject );
            image_orig_down = "." + classColumn + " img:nth-child(" + (childIndex ) + ")"
            console.log((childIndex + 1) )

            $( image_orig ).insertBefore( image_dest );
            $( image_dest ).insertBefore( dragObject );

            //$( ".col-" + (leftPosition + 2) ).prepend( dragObject );
            //$( ".col-" + (leftPosition + 1) ).prepend( droppableRightObject );

            // Movements Counter
            countMov += 1;

            deletingTopLeft();
            valueMatchArray = [];
            uniqueObj = [];
            repFlag = 0;
            deleteMatchCandies();
            runSelectCandyTime(100);
        }
      });
    }


    //$( dragObject ).draggable( "destroy" );
    //selectCandy();
  }

  function deletingTopLeft(){
    // J represent column and i represents row
    for (j = 1; j <= 7; j++) {
        //console.log("Column: " + j);
        for (i = 1; i <= 7; i++) {
          $( ".col-" + j + " img:nth-child(" + i + ")").css("top","0px");
          $( ".col-" + j + " img:nth-child(" + i + ")").css("left","0px");
        }
      }
    }

  function deletingAllCandies(){
    $ ( '.col-1' ).html("");
    $ ( '.col-2' ).html("");
    $ ( '.col-3' ).html("");
    $ ( '.col-4' ).html("");
    $ ( '.col-5' ).html("");
    $ ( '.col-6' ).html("");
    $ ( '.col-7' ).html("");
  }

  function timer(nowTime){

    minutes = 2;
    var countDownDate = nowTime  + minutes*60000;

    x = setInterval(function() {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (minutes < 10) {
        minutes = "0" + minutes.toString();
      }

      if (seconds < 10) {
        seconds = "0" + seconds.toString();
      }


      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        $( '.panel-tablero' ).hide( 900 );
        $( '.time').hide( 'fast' );
        $( ".panel-score" ).animate({
           width: "90%"
           //height: "700px"
         }, 1500, addingFinalTitle() );

        //panel-score
        document.getElementById("timer").innerHTML = "0:00";
      }

    }, 1000);
  }

  function addingFinalTitle (){
    $( '.panel-score' ).prepend("<div class='end-titulo'>Juego Terminado</div>");
    //$( '.btn-reinicio' ).html("Iniciar")
  }



  function candyEffect(candyObj){

    // Make the Candy Effect
    $(candyObj).fadeOut(timeInterval).fadeIn(timeInterval).fadeOut(timeInterval).fadeIn(timeInterval).fadeOut(timeInterval).fadeIn(timeInterval);


    //clearInterval(x);

  }

  // Function that Add new points if a Matching algorythm is found.
  // This function adds new matching objects into array
  function pointsAlg(candyObj){
        candyObjImageOrig = candyObj;
        candyObj = $(candyObj);
        // candyEffect(candyObj);
        // Counter for Max Points;
        counterMaxPoints = 0;

        // Get the image name from image child
        candyObjImage = candyObj.attr("src");

        // Get the Class Name of the Object (This represent the column)
        candyObjClass = $( candyObj ).parent().prop('className');
        lengthVal =  candyObjClass.length;
        column = candyObjClass[lengthVal -1];


        // Get the index of the Object (This represent the row)
        indexOrig = $( candyObj ).index() + 1;

        // Objects to compare Above
        candyOjbClassAbove1 = $('.' + candyObjClass + ' img:nth-child(' + (indexOrig - 1) + ')').attr("src");
        candyOjbClassAbove2 = $('.' + candyObjClass + ' img:nth-child(' + (indexOrig - 2) + ')').attr("src");
        candyOjbImageAbove1 = '.' + candyObjClass + ' img:nth-child(' + (indexOrig - 1) + ')';
        candyOjbImageAbove2 = '.' + candyObjClass + ' img:nth-child(' + (indexOrig - 1) + ')';

        // Objects to compare Below
        candyOjbClassBelow1 = $('.' + candyObjClass + ' img:nth-child(' + (indexOrig + 1) + ')').attr("src");
        candyOjbClassBelow2 = $('.' + candyObjClass + ' img:nth-child(' + (indexOrig + 2) + ')').attr("src");
        candyOjbImageBelow1 = '.' + candyObjClass + ' img:nth-child(' + (indexOrig + 1) + ')';
        candyOjbImageBelow2 = '.' + candyObjClass + ' img:nth-child(' + (indexOrig + 2) + ')';

        // Objects to compare Left
        candyOjbClassLeft1 = $('.col-' + (parseInt(column) - 1) + ' img:nth-child(' + indexOrig + ')').attr("src");
        candyOjbClassLeft2 = $('.col-' + (parseInt(column) - 2) + ' img:nth-child(' + indexOrig + ')').attr("src");
        candyOjbImageLeft1 = '.col-' + (parseInt(column) - 1) + ' img:nth-child(' + indexOrig + ')';
        candyOjbImageLeft2 = '.col-' + (parseInt(column) - 2) + ' img:nth-child(' + indexOrig + ')';

        // Objects to compare Right
        candyOjbClassRight1 = $('.col-' + (parseInt(column) + 1) + ' img:nth-child(' + indexOrig + ')').attr("src");
        candyOjbClassRight2 = $('.col-' + (parseInt(column) + 2) + ' img:nth-child(' + indexOrig + ')').attr("src");
        candyOjbImageRight1 = '.col-' + (parseInt(column) + 1) + ' img:nth-child(' + indexOrig + ')';
        candyOjbImageRight2 = '.col-' + (parseInt(column) + 2) + ' img:nth-child(' + indexOrig + ')';

        // For test
        //console.log("Candy image: " + candyObjImage)
        //console.log("Row: " + indexOrig);
        //console.log("Column: " + column);



        //path = "image/";
        //pathImage = path + "4.png"
        if (candyObjImage == candyOjbClassAbove1 && candyObjImage == candyOjbClassAbove2) {
          //console.log("Is a match Above..");
          valueMatchArray.push(candyObjImageOrig);
          valueMatchArray.push(candyOjbImageAbove1);
          valueMatchArray.push(candyOjbImageAbove2);
          points += 50;
          counterMaxPoints +=1;
          repFlag = 1;
          //console.log(extraCounter);
          //candyEffect();
        }
        if (candyObjImage == candyOjbClassBelow1 && candyObjImage == candyOjbClassBelow2) {
          //console.log("Is a match Below..");
          valueMatchArray.push(candyObjImageOrig);
          valueMatchArray.push(candyOjbImageBelow1);
          valueMatchArray.push(candyOjbImageBelow2);
          points += 50;
          counterMaxPoints +=1;
          repFlag = 1;
          //console.log(extraCounter);
          //candyEffect();
        }
        if (candyObjImage == candyOjbClassLeft1 && candyObjImage == candyOjbClassLeft2) {
          //console.log("Is a match Left..");
          valueMatchArray.push(candyObjImageOrig);
          valueMatchArray.push(candyOjbImageLeft1);
          valueMatchArray.push(candyOjbImageLeft2);
          points += 50;
          counterMaxPoints +=1;
          repFlag = 1;
          //console.log(extraCounter);
          //candyEffect();
        }
        if (candyObjImage == candyOjbClassRight1 && candyObjImage == candyOjbClassRight2) {
          //console.log("Is a match Right..");
          valueMatchArray.push(candyObjImageOrig);
          valueMatchArray.push(candyOjbImageRight1);
          valueMatchArray.push(candyOjbImageRight2);
          points += 50;
          counterMaxPoints +=1;
          repFlag = 1;
          //console.log(extraCounter);
          //candyEffect();
        }

        if (counterMaxPoints > 0 ){
          points += counterMaxPoints * 50;
        }

        //console.log(repFlag);

  }

  // Function that Adds new points and remove Candies with effect
  function deleteMatchCandies (){
      // Example of candyObj Input
      // candyObj = $('.col-1 img:nth-child(1)');

      valueMatchArray = [];
      uniqueObj = [];
      timeInterval = 300;

      // Run while once
      repFlag = 0;

      for (j = 1; j <= 7; j++) {
          //console.log("Column: " + j);
          for (i = 1; i <= 7; i++) {
            $( ".col-" + j + " img:nth-child(" + i + ")" )
            //console.log( ".col-" + j + " img:nth-child(" + i + ")" )
            pointsAlg(".col-" + j + " img:nth-child(" + i + ")")
          }
        }
        //console.log(extraCounter);

      // Delete Repeat CandyObjects
      uniqueObj = [];
      $.each(valueMatchArray, function(i, el){
          if($.inArray(el, uniqueObj) === -1) uniqueObj.push(el);
      });

      // Empty array
      valueMatchArray = [];

      //console.log(uniqueObj);
      //console.log("Puntos Totales: " + points);

      //uniqueObj.length()

      //disableDrag();
      $.each( uniqueObj, function( index, value ) {
        //console.log( index + ": " + value );
        //candyEffect(candyObj);

        // Disable Drag and Drop Functionality for every Candy

        candyEffect(uniqueObj[ index ]);
      });


      //console.log(time);
      var time = setInterval(function(){

        // Disable Option Drag
        //disableDrag();

        // Remove Each Match Candy after timeInterval
        $.each( uniqueObj, function( index, value ) {
          $(uniqueObj[ index ]).remove();
          $(".score > span").text(points);
          //clearInterval(time);
        });

        // Fill with new candies
        fillNewCandies(timeInterval);

        // Look if after deletion there is another Match on Global Variable repFlag = 1
        for (j = 1; j <= 7; j++) {
            //console.log("Column: " + j);
            for (i = 1; i <= 7; i++) {
              $( ".col-" + j + " img:nth-child(" + i + ")" )
              //console.log( ".col-" + j + " img:nth-child(" + i + ")" )
              pointsAlg(".col-" + j + " img:nth-child(" + i + ")")
            }
          }

        console.log(uniqueObj);
        if (uniqueObj.length == 0 ){
          valueMatchArray = [];
          uniqueObj = [];
          runSelectCandyTime(50);
          clearInterval(time);
        }


        //console.log(repFlag);

        if (uniqueObj.length > 0 ){
          //console.log(repFlag);

          // Clear Arrays after deletion
          valueMatchArray = [];
          uniqueObj = [];
          repFlag = 0;
          clearInterval(time);
          disableDrag();


          deleteMatchCandies();


          //deleteMatchCandies();
          enableDrag();

          //timeInterval = 300;
          //deleteMatchCandies ();
          //selectCandy();

        }
        //else{
          // Delete Interval Time
          // Clear Arrays after deletion
          //valueMatchArray = [];
          //uniqueObj = [];

          //clearInterval(time);
          //enableDrag();

          // Rerun Candy Selection
          //runSelectCandyTime(100);
        //}

        //checkIfMatchStill();

      }, timeInterval*6);


  }

  // Function to add missing candies
  function fillNewCandies (timeInterval){
    for (j = 1; j <= 7; j++) {
      var count = $(".col-" + j + " img").length;
      //console.log("Missing Objects: " + (7 - count));

      // Find missing objects by column class
      if ( count < 7 ){
        machingDeletedCounter += 1;
        //console.log( "ClassColumn: " + ".col-" + j );
        //console.log( "How many Columns have Image Deleted: " + machingDeletedCounter )
        //console.log( "Missing Objects: " + (7 - count) );


        for (i = 1; i <= (7 - count); i++) {
          randomCandy = Math.floor((Math.random() * 4) + 1);
          candy = randomCandy + ".png";

          randomId = Math.floor((Math.random() * 100000000) + 1);
          //console.log(candy);
          $(".col-" + j ).prepend('<img id="'+ randomId + '" src="image/' + candy + '" height="90px" />');
          $("#" + randomId).animate({"top" : "-=100px"},0,"linear");
          $("#" + randomId ).animate({"top" : "+=100px"},300,"linear");
          //$(".col-" + j ).animate({"top" : "+=100px"},500,"linear");
        }
      }
    }

    // Initialize counter for next matching
    machingDeletedCounter = 0;

    //console.log(timeInterval);

    runSelectCandyTime(100);
  }

  function runSelectCandyTime(timeInterval){
    selectCandy();
    //disableDrag();
    var SelectTime = setInterval(function(){
      selectCandy();
      clearInterval(SelectTime);
      //enableDrag();
    },(timeInterval));
  }

  function disableDrag(){
    // Read the Candy Matrix

    // J represent column and i represents row
    for (j = 1; j <= 7; j++) {
        //console.log("Column: " + j);
        for (i = 1; i <= 7; i++) {

          $( ".col-" + j + " img:nth-child(" + i + ")").draggable({ disabled: true });
          $( ".col-" + j + " img:nth-child(" + i + ")").draggable('disable');
        }
      }
  }

  function enableDrag(){
    // Read the Candy Matrix

    // J represent column and i represents row
    for (j = 1; j <= 7; j++) {
        //console.log("Column: " + j);
        for (i = 1; i <= 7; i++) {
          $( ".col-" + j + " img:nth-child(" + i + ")").draggable({ disabled: false });
          $( ".col-" + j + " img:nth-child(" + i + ")").draggable('enable');
        }
      }
  }

  function checkIfMatchStill(){
    var checkTime = setInterval(function(){
      deleteMatchCandies();
      clearInterval(checkTime);
      //enableDrag();
    },(1900));
  }





});
