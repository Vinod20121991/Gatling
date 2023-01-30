var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "15",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "344",
        "ok": "1064",
        "ko": "344"
    },
    "maxResponseTime": {
        "total": "1889",
        "ok": "1889",
        "ko": "921"
    },
    "meanResponseTime": {
        "total": "1014",
        "ok": "1428",
        "ko": "600"
    },
    "standardDeviation": {
        "total": "456",
        "ok": "236",
        "ko": "128"
    },
    "percentiles1": {
        "total": "993",
        "ok": "1454",
        "ko": "573"
    },
    "percentiles2": {
        "total": "1450",
        "ok": "1576",
        "ko": "598"
    },
    "percentiles3": {
        "total": "1695",
        "ok": "1821",
        "ko": "871"
    },
    "percentiles4": {
        "total": "1861",
        "ok": "1875",
        "ko": "911"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "count": 15,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.875",
        "ok": "0.938",
        "ko": "0.938"
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
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1064",
        "ok": "1064",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1889",
        "ok": "1889",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1428",
        "ok": "1428",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1454",
        "ok": "1454",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1576",
        "ok": "1576",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1821",
        "ok": "1821",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1875",
        "ok": "1875",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 27
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.938",
        "ok": "0.938",
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
        "total": "15",
        "ok": "0",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "344",
        "ok": "-",
        "ko": "344"
    },
    "maxResponseTime": {
        "total": "921",
        "ok": "-",
        "ko": "921"
    },
    "meanResponseTime": {
        "total": "600",
        "ok": "-",
        "ko": "600"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "-",
        "ko": "128"
    },
    "percentiles1": {
        "total": "573",
        "ok": "-",
        "ko": "573"
    },
    "percentiles2": {
        "total": "598",
        "ok": "-",
        "ko": "598"
    },
    "percentiles3": {
        "total": "871",
        "ok": "-",
        "ko": "871"
    },
    "percentiles4": {
        "total": "911",
        "ok": "-",
        "ko": "911"
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
    "count": 15,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.938",
        "ok": "-",
        "ko": "0.938"
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
