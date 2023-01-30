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
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1973",
        "ok": "1973",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "970",
        "ok": "970",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "497",
        "ok": "497",
        "ko": "-"
    },
    "percentiles1": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1908",
        "ok": "1908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1962",
        "ok": "1962",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 24,
    "percentage": 24
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 26
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
        "total": "1003",
        "ok": "1003",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1973",
        "ok": "1973",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1398",
        "ok": "1398",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "349",
        "ok": "349",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1367",
        "ok": "1367",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1771",
        "ok": "1771",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1927",
        "ok": "1927",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1968",
        "ok": "1968",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 24,
    "percentage": 48
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 52
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
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles1": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "percentiles2": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "percentiles3": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "percentiles4": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 100
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
