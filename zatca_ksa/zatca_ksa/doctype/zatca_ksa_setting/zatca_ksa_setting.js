// Copyright (c) 2024, KSA and contributors
// For license information, please see license.txt

frappe.ui.form.on("Zatca KSA Setting", {
	refresh(frm) {
       
    },
    production_csid: function (frm) {
        frappe.call({
            method: "zatca_ksa.zatca_ksa.sign_invoice.production_CSID",
            args: {
              
            },
            callback: function (r) {
                if (!r.exc) {
                    frm.save();
                }
            },
        });
    },
    csid_attach: function (frm) {
            frappe.call({
                method: "zatca_ksa.zatca_ksa.sign_invoice.create_CSID",
                args: {
                  
                },
                callback: function (r) {
                    if (!r.exc) {
                        frm.save();
                    }
                },
            });
        },
    create_csr: function (frm) {
        frappe.call({
            method: "zatca_ksa.zatca_ksa.sign_invoice.create_csr",
            args: {
                "portal_type":  frm.doc.select
            },
            callback: function (r) {
                if (!r.exc) {
                    frm.save();
                }
            },
        });
    },
    check_compliance: function (frm) {
         
            frappe.call({
            method: "zatca_ksa.zatca_ksa.sign_invoice.zatca_Call_compliance",
            args: {
                "invoice_number": frm.doc.sample_invoice_to_test,
                "compliance_type": "1"
            },
            callback: function (r) {
                if (!r.exc) {
                    frm.save();
                  
                }
            },
            
        });
    }
    
});


