var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "518",
        "ok": "518",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4083",
        "ok": "4083",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1707",
        "ok": "1707",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1283",
        "ok": "1283",
        "ko": "-"
    },
    "percentiles1": {
        "total": "954",
        "ok": "954",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2885",
        "ok": "2885",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3994",
        "ok": "3994",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4068",
        "ok": "4068",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 49,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    }
},
contents: {
"req_to-get-list-of--d40d0": {
        type: "REQUEST",
        name: "to get list of users",
path: "to get list of users",
pathFormatted: "req_to-get-list-of--d40d0",
stats: {
    "name": "to get list of users",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1183",
        "ok": "1183",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4083",
        "ok": "4083",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2826",
        "ok": "2826",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2893",
        "ok": "2893",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3568",
        "ok": "3568",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4019",
        "ok": "4019",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4076",
        "ok": "4076",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 49,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
}
    },"req_get-the-specifi-e0545": {
        type: "REQUEST",
        name: "get the specific user",
path: "get the specific user",
pathFormatted: "req_get-the-specifi-e0545",
stats: {
    "name": "get the specific user",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "518",
        "ok": "518",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "724",
        "ok": "724",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "588",
        "ok": "588",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles1": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "percentiles2": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "percentiles3": {
        "total": "689",
        "ok": "689",
        "ko": "-"
    },
    "percentiles4": {
        "total": "714",
        "ok": "714",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
