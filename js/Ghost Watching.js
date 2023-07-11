function Check() {
    document.getElementById("vampyr").style.color = "white"
    document.getElementById("viselnik").style.color = "white"
    document.getElementById("demon").style.color = "white"
    document.getElementById("poltergeist").style.color = "white"
    document.getElementById("rebenok").style.color = "white"
    document.getElementById("temnota").style.color = "white"
    document.getElementById("utopnik").style.color = "white"
    document.getElementById("czyanshy").style.color = "white"
    document.getElementById("age1").style.color = "white"
    document.getElementById("age2").style.color = "white"
    document.getElementById("age3").style.color = "white"
    document.getElementById("age4").style.color = "white"
    document.getElementById("angry").style.color = "white"
    document.getElementById("obsessive").style.color = "white"
    document.getElementById("concerned").style.color = "white"
    document.getElementById("calm").style.color = "white"
    if (document.getElementById("EDS").value == "1-2") {
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("EDS").value == "3") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("EDS").value == "3 RED") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("EDS").value == "5") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("temnota").style.color = "black"
    }
    if (document.getElementById("Sled").value == "no") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("Sled").value == "baby") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("Sled").value == "pentagramma") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("Sled").value == "blood") {
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    }
    if (document.getElementById("Termometr").value == "-20-10") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("Termometr").value == "-5+5") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
    } else if (document.getElementById("Termometr").value == "+10+30") {
        document.getElementById("vampyr").style.color = "black"
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("demon").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    } else if (document.getElementById("Termometr").value == "+45+55") {
        document.getElementById("viselnik").style.color = "black"
        document.getElementById("poltergeist").style.color = "black"
        document.getElementById("rebenok").style.color = "black"
        document.getElementById("temnota").style.color = "black"
        document.getElementById("utopnik").style.color = "black"
        document.getElementById("czyanshy").style.color = "black"
    }
    if (document.getElementById("Doska").value == "no") {
        document.getElementById("age2").style.color = "black"
        document.getElementById("age3").style.color = "black"
        document.getElementById("age4").style.color = "black"
    } else if (document.getElementById("Doska").value == "storona") {
        document.getElementById("age1").style.color = "black"
        document.getElementById("age4").style.color = "black"
    } else if (document.getElementById("Doska").value == "random") {
        document.getElementById("age1").style.color = "black"
        document.getElementById("age2").style.color = "black"
        document.getElementById("age3").style.color = "black"
    }
    if (document.getElementById("Chastycy").value == "100-500") {
        document.getElementById("age3").style.color = "black"
        document.getElementById("age4").style.color = "black"
    } else if (document.getElementById("Chastycy").value == "500-1000") {
        document.getElementById("age1").style.color = "black"
        document.getElementById("age2").style.color = "black"
    }
    if (document.getElementById("Vudu").value == "no") {
        document.getElementById("calm").style.color = "black"
        document.getElementById("obsessive").style.color = "black"
    } else if (document.getElementById("Vudu").value == "brosok") {
        document.getElementById("angry").style.color = "black"
        document.getElementById("concerned").style.color = "black"
        document.getElementById("calm").style.color = "black"
    } else if (document.getElementById("Vudu").value == "podyem") {
        document.getElementById("angry").style.color = "black"
        document.getElementById("obsessive").style.color = "black"
        document.getElementById("concerned").style.color = "black"
    }
    if (document.getElementById("Radio").value == "plach") {
        document.getElementById("angry").style.color = "black"
        document.getElementById("obsessive").style.color = "black"
    } else if (document.getElementById("Radio").value == "ryk") {
        document.getElementById("concerned").style.color = "black"
        document.getElementById("calm").style.color = "black"
    }
}