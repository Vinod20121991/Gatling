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
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3588",
        "ok": "3588",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles1": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles2": {
        "total": "761",
        "ok": "761",
        "ko": "-"
    },
    "percentiles3": {
        "total": "825",
        "ok": "825",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 7
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
        "total": "25",
        "ok": "25",
        "ko": "-"
    }
},
contents: {
"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3588",
        "ok": "3588",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles1": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles2": {
        "total": "761",
        "ok": "761",
        "ko": "-"
    },
    "percentiles3": {
        "total": "825",
        "ok": "825",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 7
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
        "total": "25",
        "ok": "25",
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
