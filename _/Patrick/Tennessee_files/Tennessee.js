slideShowURL = 'SlideShow_assets/SlideShow.html';       // parameter from openSlideShowWindow.js
slideShowNS4URL = 'SlideShow_assets/SlideShowNS4.html'; // parameter from openSlideShowWindow.js

slides = new Array();
slides[0] = new Slide('../Tennessee_files/P1000627.jpg', '600', '800', '');
slides[1] = new Slide('../Tennessee_files/P1000628.jpg', '600', '800', '');
slides[2] = new Slide('../Tennessee_files/P1000629.jpg', '600', '800', '');
slides[3] = new Slide('../Tennessee_files/P1000630.jpg', '600', '800', '');
slides[4] = new Slide('../Tennessee_files/P1000631.jpg', '600', '800', '');
slides[5] = new Slide('../Tennessee_files/P1000632.jpg', '600', '800', '');
slides[6] = new Slide('../Tennessee_files/P1000633.jpg', '600', '800', '');
slides[7] = new Slide('../Tennessee_files/P1000634.jpg', '600', '800', '');
slides[8] = new Slide('../Tennessee_files/P1000635.jpg', '600', '800', '');
slides[9] = new Slide('../Tennessee_files/P1000636.jpg', '600', '800', '');
slides[10] = new Slide('../Tennessee_files/P1000637.jpg', '600', '800', '');
slides[11] = new Slide('../Tennessee_files/P1000638.jpg', '600', '800', '');
slides[12] = new Slide('../Tennessee_files/P1000639.jpg', '600', '800', '');
slides[13] = new Slide('../Tennessee_files/P1000640.jpg', '600', '800', '');
slides[14] = new Slide('../Tennessee_files/P1000641.jpg', '600', '800', '');
slides[15] = new Slide('../Tennessee_files/P1000642.jpg', '600', '800', '');
slides[16] = new Slide('../Tennessee_files/P1000643.jpg', '600', '800', '');
slides[17] = new Slide('../Tennessee_files/P1000644.jpg', '600', '800', '');
slides[18] = new Slide('../Tennessee_files/P1000645.jpg', '600', '800', '');
slides[19] = new Slide('../Tennessee_files/P1000646.jpg', '600', '800', '');
slides[20] = new Slide('../Tennessee_files/P1000647.jpg', '600', '800', '');
slides[21] = new Slide('../Tennessee_files/P1000648.jpg', '600', '800', '');
slides[22] = new Slide('../Tennessee_files/P1000649.jpg', '600', '800', '');
slides[23] = new Slide('../Tennessee_files/P1000650.jpg', '600', '800', '');
slides[24] = new Slide('../Tennessee_files/P1000651.jpg', '600', '800', '');
slides[25] = new Slide('../Tennessee_files/P1000652.jpg', '600', '800', '');
slides[26] = new Slide('../Tennessee_files/P1000653.jpg', '600', '800', '');
slides[27] = new Slide('../Tennessee_files/P1000654.jpg', '600', '800', '');
slides[28] = new Slide('../Tennessee_files/P1000655.jpg', '600', '800', '');
slides[29] = new Slide('../Tennessee_files/P1000656.jpg', '600', '800', '');
slides[30] = new Slide('../Tennessee_files/P1000657.jpg', '600', '800', '');
slides[31] = new Slide('../Tennessee_files/P1000658.jpg', '600', '800', '');
slides[32] = new Slide('../Tennessee_files/P1000659.jpg', '600', '800', '');
slides[33] = new Slide('../Tennessee_files/P1000660.jpg', '600', '800', '');
slides[34] = new Slide('../Tennessee_files/P1000661.jpg', '600', '800', '');
slides[35] = new Slide('../Tennessee_files/P1000662.jpg', '600', '800', '');
slides[36] = new Slide('../Tennessee_files/P1000663.jpg', '600', '800', '');
slides[37] = new Slide('../Tennessee_files/P1000664.jpg', '600', '800', '');
slides[38] = new Slide('../Tennessee_files/P1000665.jpg', '600', '800', '');
slides[39] = new Slide('../Tennessee_files/P1000666.jpg', '600', '800', '');
slides[40] = new Slide('../Tennessee_files/P1000667.jpg', '600', '800', '');
slides[41] = new Slide('../Tennessee_files/P1000668.jpg', '600', '800', '');
slides[42] = new Slide('../Tennessee_files/P1000669.jpg', '600', '800', '');
slides[43] = new Slide('../Tennessee_files/P1000670.jpg', '600', '800', '');
slides[44] = new Slide('../Tennessee_files/P1000671.jpg', '600', '800', '');
slides[45] = new Slide('../Tennessee_files/P1000672.jpg', '600', '800', '');
slides[46] = new Slide('../Tennessee_files/P1000673.jpg', '600', '800', '');
slides[47] = new Slide('../Tennessee_files/P1000674.jpg', '600', '800', '');
slides[48] = new Slide('../Tennessee_files/P1000675.jpg', '600', '800', '');
slides[49] = new Slide('../Tennessee_files/P1000676.jpg', '600', '800', '');
slides[50] = new Slide('../Tennessee_files/P1000677.jpg', '600', '800', '');
slides[51] = new Slide('../Tennessee_files/P1000678.jpg', '600', '800', '');
slides[52] = new Slide('../Tennessee_files/P1000679.jpg', '600', '800', '');
slides[53] = new Slide('../Tennessee_files/P1000680.jpg', '600', '800', '');
slides[54] = new Slide('../Tennessee_files/P1000681.jpg', '600', '800', '');
slides[55] = new Slide('../Tennessee_files/P1000682.jpg', '600', '800', '');
slides[56] = new Slide('../Tennessee_files/P1000683.jpg', '600', '800', '');
slides[57] = new Slide('../Tennessee_files/P1000684.jpg', '600', '800', '');
slides[58] = new Slide('../Tennessee_files/P1000685.jpg', '600', '800', '');
slides[59] = new Slide('../Tennessee_files/P1000686.jpg', '600', '800', '');
slides[60] = new Slide('../Tennessee_files/P1000687.jpg', '600', '800', '');
slides[61] = new Slide('../Tennessee_files/P1000688.jpg', '600', '800', '');
slides[62] = new Slide('../Tennessee_files/P1000689.jpg', '600', '800', '');
isPureISOLatin1 = true;
contentEncodingConstant = 4;
feedbackURL = "TODO";
showFeedbackButton = false;
feedbackEnabled = true;

var MINIMUM_FONT = "10";
var UNITS = "";

function elementFontSize(element)
{
    var fontSize = MINIMUM_FONT; 

    if (document.defaultView)
    {
        var computedStyle = document.defaultView.getComputedStyle(element, null);
        if (computedStyle)
        {
            fontSize = computedStyle.getPropertyValue("font-size");
        }
    }
    else if (element.currentStyle)
    {
        fontSize = element.currentStyle.fontSize;
    }

    if ((UNITS.length == 0) && (fontSize != MINIMUM_FONT))
    {
        UNITS = fontSize.substring(fontSize.length - 2, fontSize.length)
    }

    return parseFloat(fontSize);
}

function adjustFontSizeIfTooBig(idOfElement)
{
    var oTextBoxOuterDiv;
    var oTextBoxMiddleDiv;
    var oTextBoxInnerDiv;
    var oTextBoxOuterDiv = document.getElementById(idOfElement);
    
    if (oTextBoxOuterDiv)
    {
        oTextBoxMiddleDiv = getChildOfType(oTextBoxOuterDiv, "DIV", 0);
        if (oTextBoxMiddleDiv)
        {
            oTextBoxInnerDiv = getChildOfType(oTextBoxMiddleDiv, "DIV", 0);
            if (oTextBoxInnerDiv)
            {
                var offsetHeight = oTextBoxInnerDiv.offsetHeight;
                var specifiedHeight = offsetHeight;
                if (oTextBoxMiddleDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxMiddleDiv.style.height);
                }
                else if (oTextBoxOuterDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxOuterDiv.style.height);
                }
                if (offsetHeight > specifiedHeight)
                {
                    var smallestFontSize = 200;
                    
                    var aParaChildren = getParaDescendants(oTextBoxInnerDiv);
                    var oneLine = false;
                    for (i = 0; i < aParaChildren.length; i++)
                    {
                        var oParagraphDiv = aParaChildren[i];
                        var lineHeight = elementLineHeight(oParagraphDiv);
                        oneLine = oneLine || (lineHeight * 1.5 >= specifiedHeight);
                        if (oParagraphDiv.nodeName == "DIV")
                        {
                            var fontSize = elementFontSize(oParagraphDiv);
                            smallestFontSize = Math.min( smallestFontSize, fontSize );
                            for (j = 0; j < oParagraphDiv.childNodes.length; j++)
                            {
                                var oSpan = oParagraphDiv.childNodes[j];
                                if ((oSpan.nodeName == "SPAN") || (oSpan.nodeName == "A"))
                                {
                                    fontSize = elementFontSize(oSpan);
                                    smallestFontSize = Math.min( smallestFontSize, fontSize );
                                }
                            }
                        }
                    }
                    var minimum = parseFloat(MINIMUM_FONT);
                    
                    var count = 0
                    while ((smallestFontSize > minimum) && (offsetHeight > specifiedHeight) && (count < 10))
                    {
                        ++ count;
                        if (oneLine)
                        {
                            var oldWidth = parseInt(oTextBoxOuterDiv.style.width);
                            oTextBoxInnerDiv.style.width =
                                "" + oldWidth * Math.pow(1.05, count) + "px";
                        }
                        else
                        {
                            var scale = Math.max(0.95, minimum / smallestFontSize);
                            
                            for (i = 0; i < aParaChildren.length; i++)
                            {
                                var oParagraphDiv = aParaChildren[i];
                                if (oParagraphDiv.nodeName == "DIV")
                                {
                                    var paraFontSize = elementFontSize(oParagraphDiv) * scale;
                                    var paraLineHeight = elementLineHeight(oParagraphDiv) * scale;
                                    for (j = 0; j < oParagraphDiv.childNodes.length; j++)
                                    {
                                        var oSpan = oParagraphDiv.childNodes[j];
                                        if ((oSpan.nodeName == "SPAN") || (oSpan.nodeName == "A"))
                                        {
                                            var spanFontSize = elementFontSize(oSpan) * scale;
                                            var spanLineHeight = elementLineHeight(oSpan) * scale;
                                            oSpan.style.fontSize = spanFontSize + UNITS;
                                            oSpan.style.lineHeight = spanLineHeight + UNITS;
                                            smallestFontSize = Math.min( smallestFontSize, spanFontSize );
                                        }
                                    }
                                    oParagraphDiv.style.fontSize = paraFontSize + UNITS;
                                    oParagraphDiv.style.lineHeight = paraLineHeight + UNITS;
                                    smallestFontSize = Math.min( smallestFontSize, paraFontSize );
                                }
                            }
                        }
                        
                        offsetHeight = oTextBoxInnerDiv.offsetHeight;
                    }
                }
            }
        }
    }
}


function elementLineHeight(element)
{
    var lineHeight = MINIMUM_FONT; 
    
    if (document.defaultView)
    {
        var computedStyle = document.defaultView.getComputedStyle(element, null);
        if (computedStyle)
        {
            lineHeight = computedStyle.getPropertyValue("line-height");
        }
    }
    else if (element.currentStyle)
    {
        lineHeight = element.currentStyle.lineHeight;
    }
    
    if ((UNITS.length == 0) && (lineHeight != MINIMUM_FONT))
    {
        UNITS = lineHeight.substring(lineHeight.length - 2, lineHeight.length)
    }
    
    return parseFloat(lineHeight);
}

function adjustLineHeightIfTooBig(idOfElement)
{
    var oTextBoxOuterDiv;
    var oTextBoxMiddleDiv;
    var oTextBoxInnerDiv;
    var oTextBoxOuterDiv = document.getElementById(idOfElement);
    
    if (oTextBoxOuterDiv)
    {
        oTextBoxMiddleDiv = getChildOfType(oTextBoxOuterDiv, "DIV", 0);
        if (oTextBoxMiddleDiv)
        {
            oTextBoxInnerDiv = getChildOfType(oTextBoxMiddleDiv, "DIV", 0);
            if (oTextBoxInnerDiv)
            {
                var offsetHeight = oTextBoxInnerDiv.offsetHeight;
                var specifiedHeight = offsetHeight;
                if (oTextBoxMiddleDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxMiddleDiv.style.height);
                }
                else if (oTextBoxOuterDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxOuterDiv.style.height);
                }
                if (offsetHeight > specifiedHeight)
                {
                    var adjusted = true;
                    var count = 0;
                    while ((adjusted) && (offsetHeight > specifiedHeight) && (count < 10))
                    {
                        adjusted = false;
                        ++ count;
                        
                        var aParaChildren = getParaDescendants(oTextBoxInnerDiv);
                        for (i = 0; i < aParaChildren.length; i++)
                        {
                            var oParagraphDiv = aParaChildren[i];
                            if (oParagraphDiv.nodeName == "DIV")
                            {
                                var fontSize = elementFontSize(oParagraphDiv);
                                var lineHeight = elementLineHeight(oParagraphDiv) * 0.95;
                                if (lineHeight >= (fontSize * 1.1))
                                {
                                    oParagraphDiv.style.lineHeight = lineHeight + UNITS;
                                    adjusted = true;
                                }
                                
                                
                                
                                for (j = 0; j < oParagraphDiv.childNodes.length; j++)
                                {
                                    var oSpan = oParagraphDiv.childNodes[j];
                                    if ((oSpan.nodeName == "SPAN") || (oSpan.nodeName == "A"))
                                    {
                                        var fontSize = elementFontSize(oSpan);
                                        var lineHeight = elementLineHeight(oSpan) * 0.95;
                                        if (lineHeight >= (fontSize * 1.1))
                                        {
                                            oSpan.style.lineHeight = lineHeight + UNITS;
                                            var adjusted = true;
                                        }
                                    }
                                }
                            }
                        }
                        
                        offsetHeight = oTextBoxInnerDiv.offsetHeight;
                    }
                }
            }
        }
    }
}

var smallTransparentGif = "";
function fixupIEPNG(strImageID, transparentGif) 
{
    smallTransparentGif = transparentGif;
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        var img = document.getElementById(strImageID);
        if (img)
        {
            var src = img.src;
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
            img.src = transparentGif;
            img.attachEvent("onpropertychange", imgPropertyChanged);
        }
    }
}

function fixupIEPNGBG(oBlock) 
{
    if (oBlock)
    {
        var currentBGImage = oBlock.currentStyle.backgroundImage;
        var currentBGRepeat = oBlock.currentStyle.backgroundRepeat;
        var urlStart = currentBGImage.indexOf('url(');
        var urlEnd = currentBGImage.indexOf(')', urlStart);
        var imageURL = currentBGImage.substring(urlStart + 4, urlEnd);

        if (imageURL.charAt(0) == '"')
        {
            imageURL = imageURL.substring(1);
        }
        
        if (imageURL.charAt(imageURL.length - 1) == '"')
        {
            imageURL = imageURL.substring(0, imageURL.length - 1);
        }

        var overrideRepeat = false;

        var filterStyle =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            imageURL +
            "', sizingMethod='crop');";

        if (RegExp("/C[0-9A-F]{8}.png$").exec(imageURL) != null)
        {
            filterStyle =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                imageURL +
                "', sizingMethod='scale');";

            overrideRepeat = true;
        }

        var backgroundImage = new Image();
        backgroundImage.src = imageURL;
        var tileWidth = backgroundImage.width;
        var tileHeight = backgroundImage.height; 
        
        var blockWidth = 0;
        var blockHeight = 0;
        if (oBlock.style.width)
        {
            blockWidth = parseInt(oBlock.style.width);
        }
        else
        {
            blockWidth = oBlock.offsetWidth;
        }
        if (oBlock.style.height)
        {
            blockHeight = parseInt(oBlock.style.height);
        }
        else
        {
            blockHeight = oBlock.offsetHeight;
        }

        if ((blockWidth == 0) || (blockHeight == 0))
        {
            return;
        }
        
        var wholeRows = 1;
        var wholeCols = 1;
        var extraHeight = 0;
        var extraWidth = 0;
        
        if ((currentBGRepeat.indexOf("no-repeat") != -1) ||
              ((tileWidth == 0) && (tileHeight == 0)) ||
              overrideRepeat)
        {
            tileWidth = blockWidth;
            tileHeight = blockHeight;

        }
        else if ((currentBGRepeat.indexOf("repeat-x") != -1) ||
              (tileHeight == 0))
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            tileHeight = blockHeight;

        }
        else if (currentBGRepeat.indexOf("repeat-y") != -1)
        {
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraHeight = blockHeight - (tileHeight * wholeRows);
            tileWidth = blockWidth;

        }
        else
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            extraHeight = blockHeight - (tileHeight * wholeRows);
        }
        
        var wrappedContent = document.createElement("div");
        wrappedContent.style.position = "relative";
        wrappedContent.style.zIndex = "1";
        wrappedContent.style.left = "0px";
        wrappedContent.style.top = "0px";
        if (!isNaN(parseInt(oBlock.style.width)))
        {
            wrappedContent.style.width = "" + blockWidth + "px";
        }
        if (!isNaN(parseInt(oBlock.style.height)))
        {
            wrappedContent.style.height = "" + blockHeight + "px";
        }
        var pngBGFixIsWrappedContentEmpty = true;
        while (oBlock.hasChildNodes())
        {
            if (oBlock.firstChild.nodeType == 3)
            {
                if (RegExp("^ *$").exec(oBlock.firstChild.data) == null)
                {
                    pngBGFixIsWrappedContentEmpty = false;
                }
            }
            else
            {
                pngBGFixIsWrappedContentEmpty = false;
            }
            wrappedContent.appendChild(oBlock.firstChild);
        }
        if (pngBGFixIsWrappedContentEmpty)
        {
            wrappedContent.style.lineHeight = "0px";
        }
        
        var newMarkup = "";
        for (var currentRow = 0; 
             currentRow < wholeRows; 
             currentRow++)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        
        if (extraHeight != 0)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        oBlock.innerHTML = newMarkup;

        oBlock.appendChild(wrappedContent);
        oBlock.style.background= "";
    }
}

function fixupAllIEPNGBGs()
{
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        try
        {
            var oDivNodes = document.getElementsByTagName('DIV');
            for (var iIndex=0; iIndex<oDivNodes.length; iIndex++)
            {
                var oNode = oDivNodes.item(iIndex);
                if (oNode.currentStyle &&
                    oNode.currentStyle.backgroundImage &&
                    (oNode.currentStyle.backgroundImage.indexOf('url(') != -1) &&
                    (oNode.currentStyle.backgroundImage.indexOf('.png")') != -1))
                {
                    fixupIEPNGBG(oNode);
                }
            }
        }
        catch (e)
        {
        }
    }
}

function getChildOfType(oParent, sNodeName, requestedIndex)
{
    var childrenOfType = oParent.getElementsByTagName(sNodeName);
    return (requestedIndex < childrenOfType.length) ?
           childrenOfType.item(requestedIndex) : null;
}

function getParaDescendants(oAncestor)
{
    var oParaDescendants = new Array();
    var oPotentialParagraphs = oAncestor.getElementsByTagName('DIV');
    for (var iIndex=0; iIndex<oPotentialParagraphs.length; iIndex++)
    {
        var oNode = oPotentialParagraphs.item(iIndex);
        if (oNode.className.lastIndexOf('paragraph') != -1)
        {
            oParaDescendants.push(oNode);
        }
    }
    return oParaDescendants;
}

function onPageLoad()
{
    detectBrowser();
    adjustLineHeightIfTooBig("id1");
    adjustFontSizeIfTooBig("id1");
    adjustLineHeightIfTooBig("id2");
    adjustFontSizeIfTooBig("id2");
    fixupAllIEPNGBGs();
    fixupIEPNG("id3", "Tennessee_files/transparent.gif");
    fixupIEPNG("id4", "Tennessee_files/transparent.gif");
    return true;
}

function NBmouseover(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "hidden";
        rollover.style.visibility = "visible";
    }
    return true;
}

function NBmouseout(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "visible";
        rollover.style.visibility = "hidden";
    }
    return true;
}

var windowsInternetExplorer = false;
var browserVersion = 0;
function detectBrowser()
{
    windowsInternetExplorer = false;
    var appVersion = navigator.appVersion;
    if ((appVersion.indexOf("MSIE") != -1) &&
        (appVersion.indexOf("Macintosh") == -1))
    {
        var temp = appVersion.split("MSIE");
        browserVersion = parseFloat(temp[1]);
        windowsInternetExplorer = true;
    }
}

var inImgPropertyChanged = false;
function imgPropertyChanged()
{
    if ((window.event.propertyName == "src") && (! inImgPropertyChanged))
    {
        inImgPropertyChanged = true;
        var el = window.event.srcElement;
        if (el.src != smallTransparentGif)
        {
            el.filters.item(0).src = el.src;
            el.src = smallTransparentGif;
        }
        inImgPropertyChanged = false;
    }
}

