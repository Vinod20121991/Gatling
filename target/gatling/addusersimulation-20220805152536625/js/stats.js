var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "798",
        "ok": "798",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4277",
        "ok": "4277",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2179",
        "ok": "2179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "820",
        "ok": "820",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1914",
        "ok": "1914",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4054",
        "ok": "4054",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4167",
        "ok": "4167",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 971,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    }
},
contents: {
"req_post-request-2e75e": {
        type: "REQUEST",
        name: "Post Request",
path: "Post Request",
pathFormatted: "req_post-request-2e75e",
stats: {
    "name": "Post Request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "798",
        "ok": "798",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4277",
        "ok": "4277",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2179",
        "ok": "2179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "820",
        "ok": "820",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1914",
        "ok": "1914",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4054",
        "ok": "4054",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4167",
        "ok": "4167",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 971,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "200",
        "ok": "200",
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
