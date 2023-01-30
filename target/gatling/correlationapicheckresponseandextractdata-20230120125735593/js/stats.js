var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5437",
        "ok": "5437",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2009",
        "ok": "2009",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1652",
        "ok": "1652",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1025",
        "ok": "1025",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3623",
        "ok": "3623",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5024",
        "ok": "5024",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5244",
        "ok": "5244",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 97,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1167",
        "ok": "1167",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5437",
        "ok": "5437",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3386",
        "ok": "3386",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3628",
        "ok": "3628",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4556",
        "ok": "4556",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5136",
        "ok": "5136",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5419",
        "ok": "5419",
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
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "632",
        "ok": "632",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles1": {
        "total": "624",
        "ok": "624",
        "ko": "-"
    },
    "percentiles2": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "percentiles3": {
        "total": "735",
        "ok": "735",
        "ko": "-"
    },
    "percentiles4": {
        "total": "836",
        "ok": "836",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 97,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 3
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
        "total": "8.333",
        "ok": "8.333",
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
