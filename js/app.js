$(document).ready(function(){
  /////////////// Global Variables  ////////////////////
  //console.log("Testing")
  originalColorTitle = $(".main-titulo").css("color");
  changingColorTitle = "white";
  //console.log("Color Orginal: " + originalColorTitle)
  var toChange = 0;
  var countMov = 0;

  /////////////// Main ////////////////////

  setInterval(title_effect, 1200);

  loadCandiesInitial();

  selectCandy();



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
        $(".col-"+j).append('<img id="'+ j + i + '" src="image/' + candy + '" height="90px" />')

      }
    }

  }

  // Function to get which div column and which child row
  function selectCandy (){
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
            $( droppableDownObject ).css("top","0px");
            $( droppableDownObject ).css("left","0px");

            countMov += 1;
            //console.log(countMov)

            selectCandy();
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
            $( droppableUpObject ).css("top","0px");
            $( droppableUpObject ).css("left","0px");

            countMov += 1;
            //console.log(countMov)

           selectCandy();
        }
      });
    }

    // Right movement
    if (column < 7){
      //console.log("Can go right..")
      droppableRightObject = ".col-" + (leftPosition + 2) + " img:nth-child(" + childIndex + ")"
      console.log(droppableRightObject);
      //$( droppableLeftObject ).droppable({
      //  drop: function (event, ui) {
      //      var dropped = ui.draggable;
      //      var droppedOn = this;

            //dropped.draggable({revert: false});
            //image_dest = $( droppableUpObject );
            //if (row == 1){
            //  $( droppableLeftObject ).insertBefore( image_dest );
            //}
            //else{
            //  $( droppableLeftObject ).insertAfter( image_dest );
            //}

            //$( droppableLeftObject ).css("top","0px");
            //$( droppableLeftObject ).css("left","0px");

      //     selectCandy();
      //  }
      //});
    }

    // Left movement
    if (column > 1){
    //  droppableDownObject = "." + classColumn + " img:nth-child(" + (downPosition) + ")"
      //console.log("Can go left..")
    //  $( ".col-2 img:nth-child(1)" ).droppable({
    //    drop: function (event, ui) {
    //        var dropped = ui.draggable;
    //        var droppedOn = this;

    //        dropped.draggable({revert: false});

            //image_dest = $( ".col-2 img:nth-child(1)" )
            //image_orig = $( ".col-1 img:nth-child(1)" )
            //$( ".col-2 img:nth-child(1)" ).remove()
            //$( ".col-2" ).prepend(image_orig)
            //$( ".col-1" ).prepend(image_dest)
            //$( ".col-2 img:nth-child(1)" ).css("top","0px")
            //$( ".col-2 img:nth-child(1)" ).css("left","0px")

            //selectCandy();
    //    }
    //  });
    }

    //$( dragObject ).draggable( "destroy" );
    //selectCandy();
  }

});
