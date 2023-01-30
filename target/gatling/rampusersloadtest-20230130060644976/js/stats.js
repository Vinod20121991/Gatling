var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "50",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "346",
        "ok": "997",
        "ko": "346"
    },
    "maxResponseTime": {
        "total": "2112",
        "ok": "2112",
        "ko": "789"
    },
    "meanResponseTime": {
        "total": "1006",
        "ok": "1468",
        "ko": "544"
    },
    "standardDeviation": {
        "total": "543",
        "ok": "395",
        "ko": "73"
    },
    "percentiles1": {
        "total": "893",
        "ok": "1337",
        "ko": "529"
    },
    "percentiles2": {
        "total": "1336",
        "ok": "1892",
        "ko": "554"
    },
    "percentiles3": {
        "total": "1994",
        "ok": "2075",
        "ko": "703"
    },
    "percentiles4": {
        "total": "2096",
        "ok": "2104",
        "ko": "787"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 30,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "2.941",
        "ko": "2.941"
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
        "total": "997",
        "ok": "997",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2112",
        "ok": "2112",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1468",
        "ok": "1468",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1892",
        "ok": "1892",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2075",
        "ok": "2075",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2104",
        "ok": "2104",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 30,
    "percentage": 60
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
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "346",
        "ok": "-",
        "ko": "346"
    },
    "maxResponseTime": {
        "total": "789",
        "ok": "-",
        "ko": "789"
    },
    "meanResponseTime": {
        "total": "544",
        "ok": "-",
        "ko": "544"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "-",
        "ko": "73"
    },
    "percentiles1": {
        "total": "529",
        "ok": "-",
        "ko": "529"
    },
    "percentiles2": {
        "total": "554",
        "ok": "-",
        "ko": "554"
    },
    "percentiles3": {
        "total": "703",
        "ok": "-",
        "ko": "703"
    },
    "percentiles4": {
        "total": "787",
        "ok": "-",
        "ko": "787"
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
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.941",
        "ok": "-",
        "ko": "2.941"
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
