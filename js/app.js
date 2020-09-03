$(document).ready(function(){
  /////////////// Global Variables  ////////////////////
  console.log("Testing")
  originalColorTitle = $(".main-titulo").css("color");
  changingColorTitle = "white";
  console.log("Color Orginal: " + originalColorTitle)
  var toChange = 0;

  /////////////// Main ////////////////////

  //setInterval(title_effect, 1200);

  loadCandiesInitial();

  selectCandy();



  /////////////// Functions ////////////////////

  // 1. Function for Title Effect
  function title_effect (){
    titleStyle = $(".main-titulo");
    console.log("Changing Style!");
    console.log(toChange);
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
    console.log(currentColor);

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
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(1)";
      //console.log(i);
      $(object).on('mouseenter', function (e) {
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
      $(object).on('mouseenter', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(3)";
      //console.log(i);
      $(object).on('mouseenter', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(4)";
      //console.log(i);
      $(object).on('mouseenter', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(5)";
      //console.log(i);
      $(object).on('mouseenter', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(6)";
      //console.log(i);
      $(object).on('mouseenter', function (e) {
        classColumn = $("#" + this.id).parent().prop('className')
        childIndex = $(this).index() + 1;
        //console.log("Column: " + classColumn + "  Child: " + childIndex);
        makeCandiesDragable_Droppable(classColumn,childIndex);
      });
    }
    for (i = 1; i <= 7; i++){
      object = ".col-"+i+" img:nth-child(7)";
      //console.log(i);
      $(object).on('mouseenter', function (e) {
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
    console.log("Current Row: " + row + " | Current Column: " + column);

    $(dragObject).draggable({
        revert: true,
        zIndex: 10,
        snapMode: "inner",
        snapTolerance: 40,
        start: function (event, ui) {
        }
    });

    // Down movement
    if (row < 7){
      console.log("Can go down..")
      droppableDown = 
      $( ".col-1 img:nth-child(2)" ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});

            //image_dest = $( ".col-1 img:nth-child(2)" );
            //$( ".col-1 img:nth-child(2)" ).remove();
            //$( ".col-1" ).prepend(image_dest);
            //$( ".col-1 img:nth-child(2)" ).css("top","0px");
            //$( ".col-1 img:nth-child(2)" ).css("left","0px");

            //selectCandy();
        }
      });
    }

    // Up movement
    if (row > 1){
      console.log("Can go up..")
      $( ".col-2 img:nth-child(1)" ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});

            //image_dest = $( ".col-2 img:nth-child(1)" )
            //image_orig = $( ".col-1 img:nth-child(1)" )
            //$( ".col-2 img:nth-child(1)" ).remove()
            //$( ".col-2" ).prepend(image_orig)
            //$( ".col-1" ).prepend(image_dest)
            //$( ".col-2 img:nth-child(1)" ).css("top","0px")
            //$( ".col-2 img:nth-child(1)" ).css("left","0px")

            //selectCandy();
        }
      });
    }

    // Left movement
    if (column < 7){
      console.log("Can go right..")
      $( ".col-2 img:nth-child(1)" ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});

            //image_dest = $( ".col-2 img:nth-child(1)" )
            //image_orig = $( ".col-1 img:nth-child(1)" )
            //$( ".col-2 img:nth-child(1)" ).remove()
            //$( ".col-2" ).prepend(image_orig)
            //$( ".col-1" ).prepend(image_dest)
            //$( ".col-2 img:nth-child(1)" ).css("top","0px")
            //$( ".col-2 img:nth-child(1)" ).css("left","0px")

            //selectCandy();
        }
      });
    }

    // Right movement
    if (column > 1){
      console.log("Can go left..")
      $( ".col-2 img:nth-child(1)" ).droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;

            dropped.draggable({revert: false});

            //image_dest = $( ".col-2 img:nth-child(1)" )
            //image_orig = $( ".col-1 img:nth-child(1)" )
            //$( ".col-2 img:nth-child(1)" ).remove()
            //$( ".col-2" ).prepend(image_orig)
            //$( ".col-1" ).prepend(image_dest)
            //$( ".col-2 img:nth-child(1)" ).css("top","0px")
            //$( ".col-2 img:nth-child(1)" ).css("left","0px")

            //selectCandy();
        }
      });
    }


  }

});
