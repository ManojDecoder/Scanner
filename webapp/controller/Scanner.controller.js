sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("Scanner.Scanner.controller.Scanner", {

        licenseKey: "eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE5LTAyLTAxIiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJjb20ucGZpemVyLmNsaW5pY2FsdHJpYWxzIl0sImFuZHJvaWRJZGVudGlmaWVyIjpbImNvbS5wZml6ZXIuY2xpbmljYWx0cmlhbHMiXSwid2luZG93c0lkZW50aWZpZXIiOlsiY29tLnBmaXplci5jbGluaWNhbHRyaWFscyJdfQpVZWlWUndSZUhlS3U5Y2pscDhQZHhmbVVmMUZHS3hWMVdUS1hydnI2TmFaZ0pQdHBGZkt2aGl1ZDZFTlprc2lpcnh0NDRWS2lwbGM3dXkyOHhiNnlvenpEcHBzZEtsMFl0d2hrNThMTm1TdWQ2Q1BaSVhqOTQ3bTFiRkZVUmJIZ1htbmRLdjE1M0VaaFd0M0pkMVlsUFY1aEYvazRObFFoSmFGY1RuL0VVRG1qZkdzS1dWZ3VvUTYxQnduMnp6OXFMdDNPQ1lNZmduV0huZXk1Slo2VmtENkRRTFZJSGVkQUt4YVBPY2U0bDNpeXl5ZUw4cWV6TTRkYjluOEwwcFN1VnZDTjBveFNKYmZnemY0a3RXL1N2Z3JrbW1hcHZzcEZ4Y242R1MyL1MxTHNqclhrRXcwc2k0S0xnVWo2UDkxaWxFMG8rZ2hjbXhlRzlrZisyb2xYRnc9PQ==",

        OCRConfig: {
            "camera": {
                "captureResolution": "1080"
            },
            "flash": {
                "mode": "manual",
                "alignment": "bottom_right"
            },
            "viewPlugin": {
                "plugin": {
                    "id": "OCRID",
                    "ocrPlugin": {
                        "scanMode": "LINE",
                        "languages": ["www/assets/Calibri.traineddata"],
                        "charWhitelist": "1234567890",
                        "validationRegex": "^([0-9A-Z]\\s*){12}$",
                        "minConfidence": 65,
                        "minSharpness": 66,
                        "removeSmallContours": true,
                        "removeWhitespaces": true
                    }
                },
                "cutoutConfig": {
                    "style": "rect",
                    "maxWidthPercent": "80%",
                    "maxHeightPercent": "80%",
                    "alignment": "center",
                    "width": 500,
                    "ratioFromSize": {
                        "width": 500,
                        "height": 150
                    },
                    "strokeWidth": 2,
                    "cornerRadius": 3,
                    "strokeColor": "FFFFFF",
                    "outerColor": "000000",
                    "outerAlpha": 0.3,
                    "feedbackStrokeColor": "0099FF"
                },
                "scanFeedback": {
                    "style": "contour_point",
                    "strokeWidth": 3,
                    "strokeColor": "0099FF",
                    "fillColor": "220099FF",
                    "beepOnResult": true,
                    "vibrateOnResult": true,
                    "blinkAnimationOnResult": true
                },
                "visualFeedback": {
                    "style": "contour_point",
                    "animation": "resize",
                    "animationDuration": 150,
                    "strokeColor": "0099FF",
                    "strokeWidth": 2
                },
                "cancelOnResult": true
            }
        },

        BarcodeConfig: {
            "camera": {
                "captureResolution": "1080"
            },
            "flash": {
                "mode": "manual",
                "alignment": "bottom_right"
            },
            "viewPlugin": {
                "plugin": {
                    "id": "BarcodeID",
                    "barcodePlugin": {
                        "barcodeFormatOptions": ["CODABAR", "EAN_13", "UPC_A"]
                    }
                },
                "cutoutConfig": {
                    "style": "rect",
                    "maxWidthPercent": "80%",
                    "maxHeightPercent": "80%",
                    "alignment": "center",
                    "ratioFromSize": {
                        "width": 100,
                        "height": 80
                    },
                    "strokeWidth": 1,
                    "cornerRadius": 3,
                    "strokeColor": "FFFFFF",
                    "outerColor": "000000",
                    "outerAlpha": 0.3,
                    "feedbackStrokeColor": "0099FF"
                },
                "scanFeedback": {
                    "style": "rect",
                    "strokeColor": "0099FF",
                    "fillColor": "220099FF",
                    "animationDuration": 150,
                    "blinkOnResult": true,
                    "beepOnResult": true,
                    "vibrateOnResult": true
                },
                "cancelOnResult": true
            }
        },

        OCRConfig1: {
                    "camera": {
                        "captureResolution": "1080"
                    },
                    "flash": {
                        "mode": "manual",
                        "alignment": "bottom_right"
                    },
                    "viewPlugin": {
                        "plugin": {
                            "id": "OCRID",
                            "ocrPlugin": {
                                "scanMode": "LINE",
                                "languages": ["www/assets/Calibri.traineddata"],
                                "charWhitelist": "1234567890",
                                "validationRegex": "^[0-9]{12}$",
                                "minConfidence": 60,
                                "minSharpness": 66,
                                "removeSmallContours": true,
                                "removeWhitespaces": true
                            }
                        },
                        "cutoutConfig": {
                            "style": "rect",
                            "maxWidthPercent": "80%",
                            "maxHeightPercent": "80%",
                            "alignment": "center",
                            "width": 500,
                            "ratioFromSize": {
                                "width": 720,
                                "height": 95
                            },
                            "strokeWidth": 2,
                            "cornerRadius": 3,
                            "strokeColor": "FFFFFF",
                            "outerColor": "000000",
                            "outerAlpha": 0.3,
                            "feedbackStrokeColor": "0099FF"
                        },
                        "scanFeedback": {
                            "style": "contour_point",
                            "strokeWidth": 3,
                            "strokeColor": "0099FF",
                            "fillColor": "220099FF",
                            "beepOnResult": true,
                            "vibrateOnResult": true,
                            "blinkAnimationOnResult": true
                        },
                        "visualFeedback": {
                            "style": "contour_point",
                            "animation": "resize",
                            "animationDuration": 150,
                            "strokeColor": "0099FF",
                            "strokeWidth": 2
                        },
                        "cancelOnResult": true
                    }
                },

        oView: null,

        onInit: function() {
            var oView = this.getView();
        },

        getBarcode: function() {
            cordova.exec(this.onResultBarcode, this.onError, "AnylineSDK", "scan", [this.licenseKey, this.BarcodeConfig]);
        },

        getOCR: function() {
            cordova.exec(this.onResultOCR, this.onError, "AnylineSDK", "scan", [this.licenseKey, this.OCRConfig1]);
        },

        onResultOCR: function(result) {
            console.log(result);
            alert(result.text);
        },

        onResultBarcode: function(result) {
            console.log(result);
            alert(result.value);
        },

        onError: function(error) {
            alert(error);
        },

    });
});