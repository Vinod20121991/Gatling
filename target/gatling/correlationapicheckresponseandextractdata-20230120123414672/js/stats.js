var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "548",
        "ok": "1667",
        "ko": "548"
    },
    "maxResponseTime": {
        "total": "1667",
        "ok": "1667",
        "ko": "548"
    },
    "meanResponseTime": {
        "total": "1108",
        "ok": "1667",
        "ko": "548"
    },
    "standardDeviation": {
        "total": "560",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1108",
        "ok": "1667",
        "ko": "548"
    },
    "percentiles2": {
        "total": "1387",
        "ok": "1667",
        "ko": "548"
    },
    "percentiles3": {
        "total": "1611",
        "ok": "1667",
        "ko": "548"
    },
    "percentiles4": {
        "total": "1656",
        "ok": "1667",
        "ko": "548"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.125",
        "ko": "0.125"
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1667",
        "ok": "1667",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "0.125",
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
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "maxResponseTime": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "meanResponseTime": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "percentiles2": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "percentiles3": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "percentiles4": {
        "total": "548",
        "ok": "-",
        "ko": "548"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "-",
        "ko": "0.125"
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
