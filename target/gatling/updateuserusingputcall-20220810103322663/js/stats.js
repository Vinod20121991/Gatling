var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "515",
        "ok": "-",
        "ko": "515"
    },
    "maxResponseTime": {
        "total": "866",
        "ok": "-",
        "ko": "866"
    },
    "meanResponseTime": {
        "total": "636",
        "ok": "-",
        "ko": "636"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "-",
        "ko": "114"
    },
    "percentiles1": {
        "total": "577",
        "ok": "-",
        "ko": "577"
    },
    "percentiles2": {
        "total": "776",
        "ok": "-",
        "ko": "776"
    },
    "percentiles3": {
        "total": "822",
        "ok": "-",
        "ko": "822"
    },
    "percentiles4": {
        "total": "850",
        "ok": "-",
        "ko": "850"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "-",
        "ko": "100"
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
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "515",
        "ok": "-",
        "ko": "515"
    },
    "maxResponseTime": {
        "total": "866",
        "ok": "-",
        "ko": "866"
    },
    "meanResponseTime": {
        "total": "636",
        "ok": "-",
        "ko": "636"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "-",
        "ko": "114"
    },
    "percentiles1": {
        "total": "577",
        "ok": "-",
        "ko": "577"
    },
    "percentiles2": {
        "total": "776",
        "ok": "-",
        "ko": "776"
    },
    "percentiles3": {
        "total": "822",
        "ok": "-",
        "ko": "822"
    },
    "percentiles4": {
        "total": "850",
        "ok": "-",
        "ko": "850"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "-",
        "ko": "100"
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
