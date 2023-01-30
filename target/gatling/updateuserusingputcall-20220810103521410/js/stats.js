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
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1502",
        "ok": "1502",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "617",
        "ok": "617",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles1": {
        "total": "558",
        "ok": "558",
        "ko": "-"
    },
    "percentiles2": {
        "total": "743",
        "ok": "743",
        "ko": "-"
    },
    "percentiles3": {
        "total": "788",
        "ok": "788",
        "ko": "-"
    },
    "percentiles4": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
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
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1502",
        "ok": "1502",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "617",
        "ok": "617",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles1": {
        "total": "558",
        "ok": "558",
        "ko": "-"
    },
    "percentiles2": {
        "total": "743",
        "ok": "743",
        "ko": "-"
    },
    "percentiles3": {
        "total": "788",
        "ok": "788",
        "ko": "-"
    },
    "percentiles4": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
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
