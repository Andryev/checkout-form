import http from "./http-common";

const createCompany = options => {
    return http
        .post(`/subscription`,
            options
        )
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                return res.data;
            } else {
                return null;
            }
        })
        .then(data => {
            if (!data || data.error) {
                console.log("API error:", {data});
                throw new Error("Company API Error");
            } else {
                return data;
            }
        });
};

const updateCompany = options => {
    return http
        .put(`/subscription`,
            options
        )
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                return res.data;
            } else {
                return null;
            }
        })
        .then(data => {
            if (!data || data.error) {
                console.log("API error:", {data});
                throw new Error("Company API Error");
            } else {
                return data;
            }
        });
};

const createPaymentIntent = options => {
    return http
        .post(`/create-subscription`,
            options
        )
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                return res.data;
            } else {
                return null;
            }
        });
};

const createCustomer = options => {
    return http
        .post(`/create-customer/` + options)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                return res.data.customer;
            } else {
                return null;
            }
        });
};

const getPublicStripeKey = () => {
    return http.get(`/public-key`)
        .then(data => {
            if (!data || data.error) {
                console.log("API error:", {data});
                throw Error("API Error");
            } else {
                return data.data;
            }
        });
};

const getProduct = id => {
    return http.get(`/plan/by-priceId/`+id)
        .then(data => {
            if (!data || data.error) {
                console.log("API error:", {data});
                throw Error("API Error");
            } else {
                return data.data;
            }
        });
};

const getPlans = () => {
    return http.get(`/plan`)
        .then(data => {
            if (!data || data.error) {
                console.log("API error:", {data});
                throw Error("API Error");
            } else {
                return data.data;
            }
        });
};

const api = {
    createPaymentIntent,
    createCustomer,
    getPlans,
    getProduct,
    getPublicStripeKey: getPublicStripeKey,
    createCompany: createCompany,
    updateCompany: updateCompany
};

export default api;
