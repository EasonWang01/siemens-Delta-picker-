
//--定時讀取

var SubscriptionCycle = 50;///subscription讀取頻率

var SubscriptionInstance = null;
var SubscriptionData =

    {

        ItemList: new Array(),
         
        LastIndex: 0

    };


//
function buildSubscription() {


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "xpos";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobalHMI.gsHdHmi.sMainState.arGeoPosition[1]";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "ypos";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobalHMI.gsHdHmi.sMainState.arGeoPosition[2]";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "zpos";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobalHMI.gsHdHmi.sMainState.arGeoPosition[3]";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "wpos";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/HD1_Axis_W.positioningState.actualPosition";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "xsp";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobalHMI.gsHdHmi.sMainState.arGeoVelocity[1]";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "ysp";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobalHMI.gsHdHmi.sMainState.arGeoVelocity[2]";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "zsp";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobalHMI.gsHdHmi.sMainState.arGeoVelocity[3]";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "wsp";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/HD1_Axis_W.motionStateData.actualVelocity";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;




 SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);
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

                            case "floatSpeed":

                                //Wenn Typ ist "floatValue" -> schreiben des neuen Variablenwertes in das angebundene HTML-Element.

                                {

                                    var tmpValue = document.getElementById(parItemList[k].id);

                                    Value = parseFloat(CurrentValues[i].mItemValue).toFixed(1);

                                    tmpValue.value = Value;

                                    break;

                                }
                            


                            default:

                                //Wenn Typ unbekannt oder nicht angegeben, dann wird versucht, den aktualisierten Variablenwert in das angebundene HTML-Element zu schreiben.

                                {

                                    var tmpValue = document.getElementById(parItemList[k].id);

                                    if(tmpValue != null)
                                    {
                                        Value = CurrentValues[i].mItemValue;

                                        tmpValue.value = Value;
                                    }

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


buildSubscription();

	 
//--


//--讀取函式
function ReadValue(id, SimotionVariable) {/////////函式一開始會先執行最下方sendReadRequest一次送完
    var tmpReadCB = function(parResponse)///////此為閉包
    {///伺服器回應parResponse
        for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
        {
            var tmpItemValue = parResponse[tmpIndex];//console.log(tmpItemValue);
            var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
            if(document.getElementById(id[tmpIndex]) != null)
            {///////////將讀到的值給陣列中ID顯示
             
                document.getElementById(id[tmpIndex]).value = (tmpValue); 
            }
        }
        return true;
    }
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
    for(var i = 0; i < id.length; i++)
    {
        tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
};
//--

//--寫入函式
function writeValueFN(tmpItemValue, tmpString) {
////////////////以下為opcwriterequest的callback
    var tmpWriteCB = function (parWriteResult) {

        tmpWrite.destructor();

        return true;

    }
///////////EN為LANGUAGE/////tmpWriteCB為callback
    var tmpWrite = new OPCWriteRequest("EN", tmpWriteCB);

    var tmpItemHandle = tmpWrite.addItem("SIMOTION", tmpString);
////////////tmpItemHandle 是variable from the variables list 
    tmpWrite.setItemValue(tmpItemHandle, tmpItemValue);

    tmpWrite.sendWriteRequest();
//-------------------------------------------------------------------------------

}
//--