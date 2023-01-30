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
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2134",
        "ok": "2134",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1018",
        "ok": "1018",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "526",
        "ok": "526",
        "ko": "-"
    },
    "percentiles1": {
        "total": "918",
        "ok": "918",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1408",
        "ok": "1408",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2010",
        "ok": "2010",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2092",
        "ok": "2092",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 35,
    "percentage": 35
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
        "total": "1014",
        "ok": "1014",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2134",
        "ok": "2134",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1474",
        "ok": "1474",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "360",
        "ok": "360",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1409",
        "ok": "1409",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1804",
        "ok": "1804",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2067",
        "ok": "2067",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2113",
        "ok": "2113",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 35,
    "percentage": 70
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
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "821",
        "ok": "821",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "562",
        "ok": "562",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles1": {
        "total": "534",
        "ok": "534",
        "ko": "-"
    },
    "percentiles2": {
        "total": "562",
        "ok": "562",
        "ko": "-"
    },
    "percentiles3": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles4": {
        "total": "817",
        "ok": "817",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 6
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
