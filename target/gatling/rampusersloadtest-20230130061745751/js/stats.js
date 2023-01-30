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
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1984",
        "ok": "1984",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "997",
        "ok": "997",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles1": {
        "total": "942",
        "ok": "942",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1379",
        "ok": "1379",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1848",
        "ok": "1848",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1951",
        "ok": "1951",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 48,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "5.882",
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
        "total": "1013",
        "ok": "1013",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1984",
        "ok": "1984",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1420",
        "ok": "1420",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1380",
        "ok": "1380",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1735",
        "ok": "1735",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1878",
        "ok": "1878",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1968",
        "ok": "1968",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 36
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.941",
        "ok": "2.941",
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
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "870",
        "ok": "870",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles1": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "percentiles2": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "percentiles3": {
        "total": "794",
        "ok": "794",
        "ko": "-"
    },
    "percentiles4": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 48,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 4
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
        "total": "2.941",
        "ok": "2.941",
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
