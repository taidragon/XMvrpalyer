;(function($){
    var fullpng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUFERTYzRDAwNDJCMTFFODkzOERDN0ZCRTk3ODM3N0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUFERTYzRDEwNDJCMTFFODkzOERDN0ZCRTk3ODM3N0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQURFNjNDRTA0MkIxMUU4OTM4REM3RkJFOTc4Mzc3QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQURFNjNDRjA0MkIxMUU4OTM4REM3RkJFOTc4Mzc3QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgkq9T4AAAaaSURBVHja7N3vddNW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";
    var fullsspng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjFGREQwQjAwNDJCMTFFOEIxRUZCQTdBNjFDRkQ0QjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFGREQwQjEwNDJCMTFFOEIxRUZCQTdBNjFDRkQ0QjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMUZERDBBRTA0MkIxMUU4QjFFRkJBN0E2MUNGRDRCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMUZERDBBRjA0MkIxMUU4QjFFRkJBN0E2MUNGRDRCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoPj6u0AAAadSURBVHja7N3xcdpW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";
    var startpng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTRBQjA0QTAwNDJCMTFFOEJFQ0FGQTA5RjM1MzdCM0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTRBQjA0QTEwNDJCMTFFOEJFQ0FGQTA5RjM1MzdCM0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNEFCMDQ5RTA0MkIxMUU4QkVDQUZBMDlGMzUzN0IzRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNEFCMDQ5RjA0MkIxMUU4QkVDQUZBMDlGMzUzN0IzRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpA7MaoAAASqSURBVHja7N3/bRRHGAbgzxH/kxLWFeASLhXEqSCbDpwKwB0cFQAVECqAVBB3wNFBqGDZEWPJh2b2Bz4jvPM80gojpJP2zi/fN6/t89kwDAGU/eIpAAEBAQEBAQEBAQEBAQEBAQEBAQQEBAQEBAQEBAQEBAQEBAQEBAQEEBAQEBAQEBAQEBAQEBAQEBAQQEBAQEBAQEBAQEBAQEBAQEBAQEAAAQEBAQGBH+JJA/f4+3hdjNcu//3DeB3G642XnzlnwzBs9d7+HK/9eP1a+ff/87+/zB9DEwFJgXh7Z2LMSeG4MlFoJSD/5ZVqrbR6Xec/YZOH9P13hiPyxHk/Xq8m1jJMkEerG6+PJ3qs2/PJtU8RE2Qrrk58jnmRA7fzaSIgW3DxAI/Z5bXrff4YK9aj9SNuJE0VtbCACMjM+UQtbMVi4nzyOq9dzicmiAkyI4Xlb2uXCUJZH1/brueeChPEBJl2GK+/wlfjTRCKulALCwizdnfWLt+2YsWyYk1QC5sgTFALmyAmyAopLGphE4SKPtTCJogJssgh1MImCFVdqIUFhFm7UAtbsaxYi6iFTRAmqIVNEBNkhRQWtbAJQkUfamETxARZ5BBqYROEqi7UwgLCrF2oha1YVqxF1MImCBPUwiaICbJCCota2AShog+1sAligixyCLWwCUJVF2phAWHWLtTCViwv5yJqYROECWphE4QVUljUwiYIFX2ohU0QFjmEWtgEoaoLtbCAMGsXamErFos0XQubIMxpuhY2QVgrhaWZWtgEYa0+GqqFTRDu4xAbr4VNEO6jy2eTt7HRtssE4ZTT5I/xuhEQAaEsHdzPt3SAt2JxSmnNemWCmCBMO88rlwkCBZdWLBAQaJuAgICAgPDz+GcrN6Lm5SGoeaHi3VbCYYJwap/G6yJ8qwkUw3EZG/tBKgHhVGtVmhw3W7uxJ15b7jk1+vADU3Dkc3z9ufQuNv4mcyYIa6W3/7mKRt60QUBY6t8cjJuWbtqKxZJzRnpjhl1r4TBBmHM9Xvto+FcjCAgl7/I6dWj9iRAQvl2n+vDrD5xBONJMbWuCsFZTta2AsFSTta0ViyXnjGZrWxOEKc3XtgJCidpWQKisU31oppxBOKK2NUGoUNsKCAVqWysWlXOG2tYEoUBtKyAUqG0FhMo61YdmyhmEI2pbE4QKta2AUKC2tWJROWeobU0QCtS2AkKB2lZAqKxTfWimnEE4orY1QahQ2woIBWpbKxaVc4ba1gShQG0rIBSobQWEyjrVh2bKGYQjalsThAq1rYBQoLa1YlE5Z6htTRAK1LYmyKNeeR5Kqm3Px+uFcAjIY/UQ605ap34br8vwNY0mnQ3DsJV76cbr44ke63OeFnufIibIVqT/4V+e4HHe5LAJB5uaIHdXrWffeYZR27LZCXJrlw/Va84ZaluamSC3+rwmPZ04Z+xDbUujAbmVGqiLPCGSD/m88trLj4CAMwgICAgICAgICAgICAgICCAgICAgICAgICAgICAgICAgIICAgICAgICAgICAgICAgICAgICAAAICAgICAgICAgICAgICAgICAgLiKQABAQEBAQEBAQGBn94XAQYAxZRhOCtg2noAAAAASUVORK5CYII=";
    var stoppng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkU0NzFDMDAwNDJCMTFFOEFEM0U4NkVEMkY3OTMwNTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkU0NzFDMDEwNDJCMTFFOEFEM0U4NkVEMkY3OTMwNTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRTQ3MUJGRTA0MkIxMUU4QUQzRTg2RUQyRjc5MzA1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRTQ3MUJGRjA0MkIxMUU4QUQzRTg2RUQyRjc5MzA1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl+AQO4AAAPRSURBVHja7NnRTdtAAIBhU/WdbFA6QbNBwwQJEwQmIBsUJmiYoDBBwwSkG4QJSjeACVyfekhR20Qh2Gdz/j7JEg8Q55z7fb5wUJZlAfzfO5cABAICAYGAQEAgIBAQCAgEBAIIBAQCAgGBgEBAICAQEAgIBAQCCAQEAgIBgYBAQCAgEBAICAQQCAgEBAICAYGAQEAgIBAQCAgEEAgIBAQCAgGBgEBAIJCd9y7BVsPqOIw/31fHYybjGlTHp/jzU3WsfNQC2TWIaXVMquNow+8sqmNZHTdvKJgQxDiOa7Lhdx7i2G7j+KgclGXpKvyJ4Vt1jF7wNyGOeXVcdTyUaXyfgxf8TQjkUigCCc7jBNpXuPOedPAxJQRxF1fFfV1Xx5lA+iusGqc1vM5jnEiLDj0q3r1w1di2mpxktP8SyI7mcfWoS5hAxx1YSUIUP2uKY33fddLHSdLXr3lPa47jeWJ+r3li7uOugfcQNvYXAumHMHm+NrjZn7U4ttkr9xzbfCk2f7MnkIzMGr7Ln7c0kQZxEjfpQiD5O08wUSctPTY2/Xg37cAjpEAaNEn0AU9bGNsos/MIpKVAUhi2MLZxZtdQIC1IuTcYZXquI4EAvQzks4/cNRQICAQEAgIBgYBAQCAgEEAgIBAQCAgEBAICAYGAQEAgIBBAICAQEAgIBAQCAgGBgEBAICAQlwAEAgIBgYBAQCAgEBAICAQEAggEBAICAYGAQEAgIBAQCAgEBAIIBAQCAgGBgEBAICAQEAgIBBAICAQEAgIBgYBAQCAgEBAICAQQCAgEBAICAYGAQEAgIBAQCCAQEAgIZGc/fOSuoUBAIHt5SHiuZcJzrTI9l0ASWyQ6z23icT1Wx32G4QsksWXGk+g6wTmeEt5kBNKCcKe9STCJrlsY2yKeu0lze5D8XTT8+rMYYhv7q3nD4QukJxv1y4Ze+76l1WP9Dv8rs/BbdVCWZdFT4ZFkXPMd9qgDk2gY90CHNb7mVQykd/r8f5DTor5/eoW79qgjd9hVHFtd+5GbvsbR9xXkWXgkmr7ysaorcfy9koRV8sMrXuOs5UdGK0hHVpLjPVaTpziBhh19Nl/F93a5x2oS/o/zse9xWEH+FVaCSTw+bIhiGe/Mize0aR2sjWu85TFxEaNYmQoC2fUxZbB2R87lW5xBHFsRxyQIgYA9CAgEBAICAYGAQEAgIBBAICAQEAgIBAQCAgGBgEBAICAQQCAgEBAICAQEAgIBgYBAQCCAQEAgIBAQCAgEBAICAYGAQEAggEBAICAQEAgIBAQCAgGBgECAovgtwAA5ipDIDMN/hQAAAABJRU5ErkJggg==";
    var voicepng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkYyREQ5QTAwNDJCMTFFOEExRkZGMDM3OTE1ODZBRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkYyREQ5QTEwNDJCMTFFOEExRkZGMDM3OTE1ODZBRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRjJERDk5RTA0MkIxMUU4QTFGRkYwMzc5MTU4NkFFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRjJERDk5RjA0MkIxMUU4QTFGRkYwMzc5MTU4NkFFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmR468kAAAd/SURBVHja7N3xUSNH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";
    var voicesspng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjYyREU1RDAwNDJCMTFFOEFBNjFBMkMwQjkxQzdEN0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjYyREU1RDEwNDJCMTFFOEFBNjFBMkMwQjkxQzdEN0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNjJERTVDRTA0MkIxMUU4QUE2MUEyQzBCOTFDN0Q3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNjJERTVDRjA0MkIxMUU4QUE2MUEyQzBCOTFDN0Q3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuZ8RkMAAAMJSURBVHja7NzBTeNAAIZRG3EHOnAJoQNTAVABoYN0QAlQQlJBoAKgg1AB0EGoYBgrIwHC4ygoJAG/J412pd2Tvd/OHw4pQwgF0G7PIwCBgEBAICAQEAgIBAQCAgGBAAIBgYBAQCAgEBAICAQEAgIBgQACAYGAQEAgIBAQCAgEBAICAQQCAgGBgEBAICAQEAgIBAQCAgEEAgIBgYBAQCCww/Y9gq2p47mIp4pnFs8k/coOKUMInsJmHcYzTYF8No/nPJ4Hj0ggfb41pimSNs0Ncuwx+QzSR1fx3HfE0Rikg88gvZ9UXX8fN0hvJtXzCnEUK/5dBPKvJxUmlkmFG4SfTyoEYlJhYplUuEEwqQSCSYWJZVLhBjGpEIhJhYllUuEGMakQiEmFiWVS4QYxqRCISYWJZVK5NXCDmFQIxKSiBxOrKhZfrFan31deFwJZ/I9+Hc/Q60EgXw3SB2a3BQJpuTl8JsCH9IypOBBIu7rwo1YEkjXyKhBI3qlXgUDa+TZzBNLBB3MEAgIBgYBAAIGAQEAgIBAQCAgEBAICAYGAQACBgEBAICAQEAgIBAQCAgGBAAIBgYBAQCAgEBAICAQEAgIBgQACAYGAQEAgIBAQCAhkVXOvAYHkzbwGBNLtzqtAIHm3XgUCyRvH8+h1IJC8YTxvXgkCafcSTy0SBJLX/ERrYG4hkOU3yUk8k3hevSYE8t1D+lxSxVOu+Ryl+ODPBvKb5im+S595EEjeOM25J/8UEEj+BwO1yYVATC4EYnIhEJMLgZhcCMTkQiAmFwIxuRCIyWVyCQSTC4GYXAjE5EIgJhcCMbkQiMmFQEwuBGJymVwCYf2Ty3cVC8TkWnL7sCPKEIKnsDnN7LqJ5yDz581XHFUekxvE5Go38ojcIHzcJmcpmFm6WXzLvUDAxAKBgEBAIIBAQCAgEBAICAQEAgIBgYBAAIGAQEAgIBAQCAgEBAICAYGAQACBgEBAICAQEAgIBAQCAgGBAAIBgYBAQCAgEBAICAQEAgIBgQACAYGAQEAgsD3vAgwA+49+6GUcbIYAAAAASUVORK5CYII=";
    $.fn.pwxpanorama = function(options) {
        var defaults = {
            videourl : "mv1.mp4",

            fillbool :false,

            isUserInteracting:false,
            onMouseDownMouseX:0,onMouseDownMouseY:0,
            lon : 0, onMouseDownLon : 0,
            lat : 0, onMouseDownLat : 0,
            phi : 0, theta : 0,
            distance : 50,
            onPointerDownPointerX : 0,
            onPointerDownPointerY : 0,
            onPointerDownLon : 0,
            onPointerDownLat : 0,

            stopurl:stoppng,
            voiceurl:voicepng,
            fullurl:fullpng
        };

        var options = $.extend(defaults,options);
        return this.each(function() {
            var  _SELF = $(this);

            var objectDom = '<div id="container">\
                <div class="controll">\
                <div class="btns">\
                    <button id="video_start_btn" style="left: 30px;background-image: url('+ options.stopurl + ')">\
                    </button>\
                    <div class="coll">\
                        <span name="progress">\
                            <b></b>\
                            <b></b>\
                            <b></b>\
                        </span>\
                    </div>\
                    <button id="video_mutedoff_btn" style="left:620px;background-image: url('+ options.voiceurl+')">\
                    </button>\
                    <div class="voicecoll">\
                        <span name="vprogress">\
                            <b></b>\
                            <b></b>\
                            <b></b>\
                        </span>\
                    </div>\
                    <button id="video_full_btn" style="left: 860px;background-image: url('+ options.fullurl+')" >\
                    </button>\
                </div>\
                </div>\
            </div>';


            _SELF.html(objectDom);

            var fillbool=false;

            var camera, scene, renderer,video,flag,flagvoice;

            var init = function() {

                var container, mesh;
                /*绑定div*/
                container = document.getElementById( 'container' );
                /*创建相机*/
                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
                camera.target = new THREE.Vector3( 0, 0, 0 );/*相机目标*/
                /*创建场景*/
                scene = new THREE.Scene();
                /*创建一个球*/
                var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
                // invert the geometry on the x-axis so that all of the faces point inward
                geometry.scale( - 1, 1, 1 );/*球的大小*/
                /*创建一个video*/
                video = document.createElement( 'video' );
                video.width = 640;
                video.height = 360;
                video.loop = true;
                video.muted = false;
                video.autoplay=true;
                video.src = options.videourl;
                video.setAttribute( 'webkit-playsinline', 'webkit-playsinline' );
                video.play();
                /*video.addEventListener("canplay",function() { video.currentTime = 50;});*/

                var texture = new THREE.VideoTexture( video );
                texture.minFilter = THREE.LinearFilter;
                texture.format = THREE.RGBFormat;

                var material   = new THREE.MeshBasicMaterial( { map : texture } );

                mesh = new THREE.Mesh( geometry, material );

                scene.add( mesh );

                renderer = new THREE.WebGLRenderer();
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );

                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'wheel', onDocumentMouseWheel, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            };

            var onWindowResize = function() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            var onDocumentMouseDown = function( event ) {

                event.preventDefault();

                options.isUserInteracting = true;

                options.onPointerDownPointerX = event.clientX;
                options.onPointerDownPointerY = event.clientY;

                options.onPointerDownLon = options.lon;
                options.onPointerDownLat = options.lat;

            }

            var onDocumentMouseMove = function( event ) {

                if ( options.isUserInteracting === true ) {

                    options.lon = ( options.onPointerDownPointerX - event.clientX ) * 0.1 + options.onPointerDownLon;
                    options.lat = ( event.clientY - options.onPointerDownPointerY ) * 0.1 + options.onPointerDownLat;

                }

            }

            var onDocumentMouseUp = function( event ) {

                options.isUserInteracting = false;

            }

            var onDocumentMouseWheel = function( event ) {

                distance += event.deltaY * 0.05;

                distance = THREE.Math.clamp( distance, 1, 50 );

            }

            var animate = function(){

                requestAnimationFrame( animate );
                update();

            };

            var update = function() {

                options.lat= Math.max( - 85, Math.min( 85, options.lat ) );
                options.phi = THREE.Math.degToRad( 90 - options.lat );
                options.theta = THREE.Math.degToRad( options.lon );

                camera.position.x = options.distance * Math.sin( options.phi ) * Math.cos( options.theta );
                camera.position.y = options.distance * Math.cos( options.phi );
                camera.position.z = options.distance * Math.sin( options.phi ) * Math.sin( options.theta );

                camera.lookAt( camera.target );

                renderer.render( scene, camera );

            }

            init();
            animate();

            /*开始/暂停*/
            var start = function() {
                if(video.paused==false){
                    video.pause();
                    $("#video_start_btn").css("background-image"," url("+startpng+")")
                }else{
                    video.play();
                    $("#video_start_btn").css("background-image"," url("+stoppng+")")
                }
            };
            $("#video_start_btn",_SELF).click(start);
            /*是否静音*/
            var mutedoff = function(){
                if(video.muted==true){
                    video.muted=false;
                    $("#video_mutedoff_btn").css("background-image"," url("+voicepng+")")
                }else{
                    video.muted=true;
                    $("#video_mutedoff_btn").css("background-image"," url("+voicesspng+")")
                }
            }
            $("#video_mutedoff_btn",_SELF).click(mutedoff);
            /*是否全屏*/
            var showFull = function(){
                var full=document.getElementById("container");
                if(fillbool==false){
                    launchIntoFullscreen(full);
                    fillbool=true;
                    $("#video_full_btn").css("background-image"," url("+fullsspng+")")
                }else{
                    exitFullscreen();
                    fillbool=false;
                    $("#video_full_btn").css("background-image"," url("+fullpng+")")
                }
            }
            var launchIntoFullscreen = function (element) {
                if(element.requestFullscreen){
                    element.requestFullscreen();
                }
                else if(element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                }
                else if(element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                }
                else if(element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }
            var exitFullscreen = function () {
                if(document.exitFullscreen) {
                    document.exitFullscreen();
                } else if(document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
            $("#video_full_btn",_SELF).click(showFull);
            //视频进度条相关操作
            var initProgressBar = function(){
                var main_div = $(".coll");
                var timeDrag = false;   /* Drag status */
                $("span[name='progress']",main_div).mousedown(function(e) {     //进度条的按下操作
                    timeDrag = true;

                    updatebar(e.pageX);
                    e.stopPropagation();
                });
                $(document).mouseup(function(e) {               //松开
                    if(timeDrag) {
                        timeDrag = false;
                        updatebar(e.pageX);
                        e.stopPropagation();
                    }
                });
                $(document).mousemove(function(e) {  //鼠标移动事件
                    if(timeDrag) {

                        updatebar(e.pageX);
                        e.stopPropagation();
                    }
                });

                //update Progress Bar control
                var updatebar = function(x) {  //更新时间与播放条进度
                    var progress = $("span[name='progress']",main_div);
                    var maxduration = video.duration; //Video duraiton 返回视频长度
                    /*alert(progress.offset().left)*/
                    var position = x - progress.offset().left; //Click pos
                    var percentage = 100 * position / progress.width();
                    /*alert(percentage)*/
                    //Check within range    检查范围内
                    if(percentage > 100) {
                        percentage = 100;
                    }
                    if(percentage < 0) {
                        percentage = 0;
                    }
                    //Update progress bar and video currenttime   更新进度条和视频时间
                    $("span b:eq(0)",main_div).css('width', percentage+'%');
                    video.currentTime = maxduration * percentage / 100;

                };

            };

//声音进度条相关操作
            var initvoiceBar = function(){
                var main_voicediv = $(".voicecoll");
                var voicetimeDrag = false;   /* Drag status */
                $("span[name='vprogress']",main_voicediv).mousedown(function(e) {     //进度条的按下操作
                    voicetimeDrag = true;
                    voiceupdatebar(e.pageX);
                    e.stopPropagation();
                });
                $(document).mouseup(function(e) {               //松开
                    if(voicetimeDrag) {
                        voicetimeDrag = false;
                        voiceupdatebar(e.pageX);
                        e.stopPropagation();
                    }
                });
                $(document).mousemove(function(e) {  //鼠标移动事件
                    if(voicetimeDrag) {
                        voiceupdatebar(e.pageX);
                        e.stopPropagation();
                    }
                });

                //update Progress Bar control
                var voiceupdatebar = function(x) {  //更新时间与播放条进度
                    var progress = $("span[name='vprogress']",main_voicediv);
                    var maxduration = 1; //Video duraiton 返回视频长度
                    /*alert(progress.offset().left)*/
                    var position = x - progress.offset().left; //Click pos
                    var percentage = 100 * position / progress.width();
                    /*alert(percentage)*/
                    //Check within range    检查范围内
                    if(percentage > 100) {
                        percentage = 100;
                    }
                    if(percentage < 0) {
                        percentage = 0;
                    }
                    //Update progress bar and video currenttime   更新进度条和视频时间
                    $("span b:eq(0)",main_voicediv).css('width', percentage+'%');
                    video.volume = maxduration * percentage / 100;

                };
            };

            var initVideo = function(player){
                flag = true;
                flagvoice = true;

                var main_div = $(".coll");
                var main_voicediv = $(".voicecoll");

                //实时更新播放进度条和时间
                video.ontimeupdate= function() {
                    //视频进度条控制
                    var currentPos = video.currentTime; //Get currenttime    //当前时间
                    var maxduration = video.duration; //Get video duration   //总时间
                    var percentage = 100 * currentPos / maxduration; //in %
                    $("span b:eq(0)",main_div).css("width",percentage+"%");
                    //音频进度条控制
                    var currentPosvoice = video.volume; //Get currenttime    //当前时间
                    var maxdurationvoice = 1; //Get video duration   //总时间
                    var percentagevoice = 100 * currentPosvoice / maxdurationvoice; //in %
                    $("span b:eq(0)",main_voicediv).css("width",percentagevoice+"%");
                };
                initProgressBar();
                initvoiceBar();
            };

            initVideo();
        });
}
})(jQuery);