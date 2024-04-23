import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 8,
        color: 'white',
    },
    form: {
        padding: 4,
    },
    formField: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 8,
        borderRadius: 10,
        padding: 4,
    },
    formInput: {
        marginRight: 4,
    },
    formTextField: {
        width: "15%",
    },
    formLabel: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 4,
    },
    button: {
        flex: 1,
        borderRadius: 6,
        padding: 6,
        margin: 6,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    buttonPrimary: {
        backgroundColor: "mediumseagreen",
    },
    buttonSecondary: {
        backgroundColor: "indigo",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    passwordText: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        marginLeft: 4,
    },
    inputColumn: {
        flexDirection: "column",
        alignItems: "center",
    },
    card: {
        backgroundColor: "beige",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
        margin: 20,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

    },
    description: {
        marginTop: 14,
        marginBottom: 10,
        fontSize: 18,
        color: "gray",
    }
})

module.exports = styles