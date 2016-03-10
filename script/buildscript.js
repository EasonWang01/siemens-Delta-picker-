
//////////用來間段讀取參數

var SubscriptionCycle = 50;///subscription讀取頻率

var SubscriptionInstance = null;
var SubscriptionData =

    {

        ItemList: new Array(),
         
        LastIndex: 0

    };




function subscription(instance, cycleTime, parItemList) {

    var HandleList = new Array;


    if (!instance) {

        //Rckgabefunktion fr die subscription. Diese Funktion beschreibt wie die aktualisierten Variablen auf der HTML-Seite dargestellt werden sollen.

        var tmpSubscriptionCB = function (CurrentValues) {

            for (var i = 0; i < CurrentValues.length; i++) {

                for (var k = 0; k < HandleList.length; k++) {

                    if (CurrentValues[i].mItemHandle == HandleList[k]) {

                        var Value = "empty";

                        switch (parItemList[k].style) {

                            //Diese switch-case Anweisung beschreibt das unterschiedliche Vorgehen der Aktualisierung je nach verwendetem "style" in der oben beschriebenen Itemlist der "buildSubscription"-Funktion.

                            case "floatValue":

                                //Wenn Typ ist "floatValue" -> schreiben des neuen Variablenwertes in das angebundene HTML-Element.
                                {

                                    var tmpValue = document.getElementById(parItemList[k].id);

                                    Value = parseFloat(CurrentValues[i].mItemValue).toFixed(2);

                                    tmpValue.value = Value;

                                    break;
                                }

                              case "stopBtn":

                                //
                                {

                                    var tmpValue = document.getElementById(parItemList[k].id);

                                    Value = (CurrentValues[i].mItemValue);
                                  btnState = Value;

                                    if(Value=="true"){
                                    	$('#super').html("緊急停止");

                                    }else{
                                    	$('#super').html("緊急停止中");
                                    };

                                    break;
                                }

                             case "startBtn":

                                //
                                {

                                    var tmpValue = document.getElementById(parItemList[k].id);

                                    Value = (CurrentValues[i].mItemValue);
                                  btnOpen = Value;

                                    if(Value=="true"){
                                        $('#motorcontrol').html("開啟中");

                                    }else{
                                        
                                        $('#motorcontrol').html("未開啟");
                                    };

                                    break;
                                }


                            case "floatSpeed":

                                //Wenn Typ ist "floatValue" -> schreiben des neuen Variablenwertes in das angebundene HTML-Element.

                                {

                                    var tmpValue = document.getElementById(parItemList[k].id);

                                    Value = parseFloat(CurrentValues[i].mItemValue).toFixed(1);

                                    tmpValue.value = Value;

                                    break;

                                }
                            


                             case "default":

                                //Wenn Typ unbekannt oder nicht angegeben, dann wird versucht, den aktualisierten Variablenwert in das angebundene HTML-Element zu schreiben.

                                {

                                   
                                        Value = CurrentValues[i].mItemValue;

                                        console.log(Value);
                                    break;

                                };

                        }

                    }

                }

            }

        };

        var tmpCancelCB = function () {

            if (instance) {

                instance.destructor();

                instance = null;

            }

        };



        instance = new OPCSubscriptionAutoRefresh("DE", tmpSubscriptionCB, tmpCancelCB, cycleTime);

        for (var i = 0; i < parItemList.length; i++) {

            HandleList[i] = instance.addItem(parItemList[i].itemPath, parItemList[i].itemName);

        }

        return instance;

    }

};