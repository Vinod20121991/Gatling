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
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1009",
        "ok": "1009",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "609",
        "ok": "609",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles1": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles2": {
        "total": "734",
        "ok": "734",
        "ko": "-"
    },
    "percentiles3": {
        "total": "792",
        "ok": "792",
        "ko": "-"
    },
    "percentiles4": {
        "total": "819",
        "ok": "819",
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
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
},
contents: {
"req_put-request-to--db07f": {
        type: "REQUEST",
        name: "put request to update the user",
path: "put request to update the user",
pathFormatted: "req_put-request-to--db07f",
stats: {
    "name": "put request to update the user",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1009",
        "ok": "1009",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "609",
        "ok": "609",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles1": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles2": {
        "total": "734",
        "ok": "734",
        "ko": "-"
    },
    "percentiles3": {
        "total": "792",
        "ok": "792",
        "ko": "-"
    },
    "percentiles4": {
        "total": "819",
        "ok": "819",
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
        "total": "50",
        "ok": "50",
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
