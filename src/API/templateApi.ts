import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const templateApi = createApi({
    reducerPath: "templateApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api-host/"}),
    endpoints: builder => ({
        // create Get methods from builder query
        getTemplate: builder.query({
            query: () => "showTemplate",
        }),

        // create all other methods from builder mutation
        addTemplate: builder.mutation({
            query: body => ({
                url: "addTemplate",
                method: "POST",
                body,
            }),
        })
    }),
});

export const {useGetTemplateQuery, useAddTemplateMutation} = templateApi;