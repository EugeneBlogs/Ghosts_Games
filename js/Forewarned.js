function Check() {
    document.getElementById("ataimon").style.color = "#ce8600"
    document.getElementById("dekan").style.color = "#ce8600"
    document.getElementById("nekref").style.color = "#ce8600"
    document.getElementById("ratos").style.color = "#ce8600"
    document.getElementById("talgor").style.color = "#ce8600"
    document.getElementById("ufris").style.color = "#ce8600"
    if (document.getElementById("go_yes").checked) {
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
    } else if (document.getElementById("go_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("mi_yes").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
    } else if (document.getElementById("mi_no").checked) {
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("ms_yes").checked) {
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
    } else if (document.getElementById("ms_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("pt_yes").checked) {
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
    } else if (document.getElementById("pt_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("pg_yes").checked) {
        document.getElementById("talgor").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    } else if (document.getElementById("pg_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
    }
    if (document.getElementById("padio_yes").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
    } else if (document.getElementById("padio_no").checked) {
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("ro_yes").checked) {
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    } else if (document.getElementById("ro_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
    }
    if (document.getElementById("rt_yes").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
    } else if (document.getElementById("rt_no").checked) {
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("tp_yes").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
    } else if (document.getElementById("tp_no").checked) {
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("uo_yes").checked) {
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    } else if (document.getElementById("uo_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
    }
    if (document.getElementById("steps_yes").checked) {
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
    } else if (document.getElementById("steps_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    }
    if (document.getElementById("ep_yes").checked) {
        document.getElementById("dekan").style.color = "#573800"
        document.getElementById("ufris").style.color = "#573800"
    } else if (document.getElementById("ep_no").checked) {
        document.getElementById("ataimon").style.color = "#573800"
        document.getElementById("nekref").style.color = "#573800"
        document.getElementById("ratos").style.color = "#573800"
        document.getElementById("talgor").style.color = "#573800"
    }
}