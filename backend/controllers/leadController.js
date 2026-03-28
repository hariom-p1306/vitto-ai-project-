import pool from "../config/db.js";

// CREATE LEAD
export const createLead = async (req, res) => {
    try {
        const {
            email,
            phone,
            institution_name,
            institution_type,
            city,
            loan_book_size,
        } = req.body;

        const result = await pool.query(
            `INSERT INTO public.leads 
  (email, phone, institution_name, institution_type, city, loan_book_size) 
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [email, phone, institution_name, institution_type, city, loan_book_size]
        );
        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


// GET LEAD
export const getLead = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM public.leads WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Lead not found" });
        }

        res.json(result.rows[0]);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};