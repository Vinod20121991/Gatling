var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1587",
        "ok": "1587",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "percentiles1": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "percentiles2": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1267",
        "ok": "1267",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1523",
        "ok": "1523",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.4",
        "ok": "1.4",
        "ko": "-"
    }
},
contents: {
"req_to-read-data-fr-a898e": {
        type: "REQUEST",
        name: "to read data from csv file",
path: "to read data from csv file",
pathFormatted: "req_to-read-data-fr-a898e",
stats: {
    "name": "to read data from csv file",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1587",
        "ok": "1587",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "percentiles1": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "percentiles2": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1267",
        "ok": "1267",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1523",
        "ok": "1523",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.4",
        "ok": "1.4",
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
